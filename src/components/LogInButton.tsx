import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@nextui-org/react'

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button
      color="primary"
      className="font-bold indigo-light dark:indigo-dark"
      onClick={() =>
        loginWithRedirect({
          appState: { returnTo: '/chat' },
        })
      }
    >
      Iniciar Sesión
    </Button>
  )
}

export default LoginButton
