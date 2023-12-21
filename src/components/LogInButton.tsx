import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@nextui-org/react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button
      color="primary"
      className="bg-indigo-600 font-bold text-white"
      onClick={() => loginWithRedirect()}
    >
      Iniciar Sesión
    </Button>
  )
}

export default LoginButton
