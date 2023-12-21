import { MdError } from 'react-icons/md'
export default function ErrorPage() {
  return (
    <section className="grid place-items-center pt-12">
      <div className="flex items-center">
        <MdError className="h-8 w-8 text-yellow-500" />
        <h2>Ruta no encontrada</h2>
      </div>
    </section>
  )
}
