import { Link } from 'react-router-dom'

const LoginButton = () => {
  return (
    <Link
      to="/login"
      className="rounded-[6px] bg-indigo-600 p-2.5 font-bold text-white"
    >
      Iniciar Sesión
    </Link>
  )
}

export default LoginButton
