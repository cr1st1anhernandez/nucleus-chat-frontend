import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@nextui-org/react'
const LogOutButton = () => {
  const { logout } = useAuth0()

  return (
    <Button
      variant="ghost"
      className="font-bold"
      color="danger"
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Cerrar Sesion
    </Button>
  )
}

export default LogOutButton
