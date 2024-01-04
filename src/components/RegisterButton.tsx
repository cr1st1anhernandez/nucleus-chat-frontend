import { Link } from 'react-router-dom'

const RegisterButton = () => {
  return (
    <Link
      to="/register"
      className="rounded-[6px] bg-indigo-600 bg-opacity-20 p-2.5 font-bold text-indigo-600"
    >
      Crear Cuenta
    </Link>
  )
}

export default RegisterButton
