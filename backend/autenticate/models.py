from django.db import models

# Create your models here.
class usuarioc(models.Model):
    correo=models.CharField(max_length=30)
    contraseña=models.CharField(max_length=30)
    contraseñam=models.CharField(max_length=30)