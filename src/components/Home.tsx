import { Button } from '@nextui-org/react'
import { HiOutlineBeaker } from 'react-icons/hi'
import { IoLogoGithub } from 'react-icons/io5'
import { LuLogIn } from 'react-icons/lu'
function Home() {
  return (
    <section className="flex flex-col gap-2 px-5 pt-10 sm:pt-5 md:gap-12 md:pt-20 lg:flex-row xl:pt-36 2xl:px-52">
      <div className="z-20 flex flex-col gap-4 lg:w-1/2 lg:justify-center lg:gap-2">
        <h1>Nucleus Chat</h1>
        <p>
          Nucleus Chat te permite chatear con miles de personas por todo el
          mundo solo basta con escribir el nombre del usuario y listo.
          <span className="hidden md:inline">
            Creada con
            <span className="font-bold text-green-600"> SpringBoot </span>del
            lado del servidor,
            <span className="font-bold text-blue-600"> React </span>
            del lado del cliente y
            <span className="font-bold text-amber-500"> MySql </span> como base
            de datos.
          </span>
        </p>

        <div className="grid gap-2 md:grid-cols-2">
          <Button
            color="primary"
            className="font-bold text-white md:col-span-2"
            endContent={<HiOutlineBeaker className="h-4 w-4" />}
          >
            Probar
          </Button>
          <Button
            endContent={<IoLogoGithub />}
            color="primary"
            className="font-bold"
            variant="bordered"
          >
            Github
          </Button>
          <Button
            endContent={<LuLogIn />}
            color="primary"
            className="font-bold"
            variant="bordered"
          >
            Iniciar Sesión
          </Button>
        </div>
      </div>
      <div className="z-20 mx-auto flex w-full items-center justify-center sm:w-2/3 lg:w-1/2">
        <img
          src="/src/assets/images/principalImage.svg"
          alt="Imagen principal del sitio"
        />
      </div>
      <div className="absolute right-0 top-0 z-10 h-[40rem] w-full rotate-180 transform overflow-hidden lg:w-[40rem]">
        <img
          src="src/assets/images/docs-right.png"
          className="transition-transform-opacity rounded-large relative -left-32 top-56 z-10 opacity-0 shadow-none shadow-black/5 !duration-300 data-[loaded=true]:opacity-100 motion-reduce:transition-none xl:top-0 2xl:left-20"
          alt="docs right background"
          data-loaded="true"
        />
      </div>
      <div className="absolute -left-0 bottom-0 z-10 h-[40rem] w-full overflow-hidden lg:w-[50rem]">
        <img
          src="src/assets/images/docs-left.png"
          className="transition-transform-opacity rounded-large relative -bottom-96 -left-20 z-10 opacity-0 shadow-none shadow-black/5 !duration-300 data-[loaded=true]:opacity-100 motion-reduce:transition-none 2xl:-bottom-32 2xl:-left-64"
          alt="docs right background"
          data-loaded="true"
        ></img>
      </div>
    </section>
  )
}

export default Home
