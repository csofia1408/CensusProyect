async function getData() {
  const res = await fetch('http://127.0.0.1:8000/test/', {
    cache: "no-cache"
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log("this is the info from the back",res)
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export default async function Home() {

  const data = await getData()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          You Home Page
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        {data.map((item, index) => (
          <p key={index}>{item.email}</p>
        ))}
      </div>
    </main>
  )
}
