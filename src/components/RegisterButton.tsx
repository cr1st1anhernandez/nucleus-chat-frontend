import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@nextui-org/react'

const RegisterButton = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button
      color="primary"
      variant="bordered"
      className="indigo-light dark:indigo-dark font-bold"
      onClick={() =>
        loginWithRedirect({
          appState: { returnTo: '/chat' },
          authorizationParams: { screen_hint: 'signup' },
        })
      }
    >
      Crear Cuenta
    </Button>
  )
}

export default RegisterButton
