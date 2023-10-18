from bson.json_util import dumps
from django.shortcuts import render, redirect
import pymongo
from django.conf import settings
from django.http import HttpResponse


def index(request):
    if request.method == "POST":
        correo = request.POST["correo"]
        contraseña = request.POST["contraseña"]
        cliente = pymongo.MongoClient(settings.DB_NAME)
        db = cliente["CensusDB"]
        datos = db["profile"]

        usuario = {
            "email": correo,
            "password": contraseña
        }

        # Let MongoDB generate a unique _id
        datos.insert_one(usuario)
        return redirect(index)  

    return render(request, "index.html")

def getAPITest(request):
    if request.method == "GET":
        cliente = pymongo.MongoClient(settings.DB_NAME)
        db = cliente["CensusDB"]
        datos = db["profile"]

        # get values
        values = datos.find()
        list_cur = list(values)
        print(list_cur)
        json_data = dumps(list_cur)
        print(json_data)

        return HttpResponse(json_data)

