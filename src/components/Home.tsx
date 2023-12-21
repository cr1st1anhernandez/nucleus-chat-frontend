import { Button } from '@nextui-org/react'
function Home() {
  return (
    <section className="indigo-light dark:indigo-dark flex flex-col gap-12 px-5 pt-20 lg:flex-row xl:pt-36 2xl:px-52">
      <div className="flex flex-col gap-2 lg:w-1/2 lg:justify-center">
        <h1>Nucleus Chat</h1>
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
          <Button
            color="primary"
            className="font-bold text-white md:col-span-2"
          >
            Probar
          </Button>
          <Button color="primary" className="font-bold" variant="bordered">
            Github
          </Button>
          <Button color="primary" className="font-bold" variant="bordered">
            Iniciar Sesión
          </Button>
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
