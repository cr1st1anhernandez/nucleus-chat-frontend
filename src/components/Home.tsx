function Home() {
  return (
    <section className="indigo-light flex flex-col gap-12 px-5 pt-20 lg:flex-row xl:pt-36 2xl:px-52 dark:text-white">
      <div className="flex flex-col gap-2 lg:w-1/2 lg:justify-center">
        <h1 className="shadow-indigo-600 drop-shadow-lg">Nucleus Chat</h1>
        <p>
          Nucleus Chat te permite chatear con miles de personas por todo el
          mundo solo basta con escribir el nombre del usuario y listo. Creada
          con<span className="font-bold text-green-600"> SpringBoot </span>del
          lado del servidor,
          <span className="font-bold text-blue-600"> React </span>
          del lado del cliente y
          <span className="font-bold text-amber-500"> MySql </span> como base de
          datos.
        </p>
        <div className="grid gap-2 md:grid-cols-2">
          <button>Probar</button>
          <button>Github</button>
          <button>Iniciar Sesión</button>
        </div>
      </div>
      <div className="mx-auto flex items-center justify-center sm:w-2/3 lg:w-1/2">
        <img
          src="/src/assets/images/principalImage.svg"
          alt="Imagen principal del sitio"
        />
      </div>
    </section>
  )
}

export default Home
