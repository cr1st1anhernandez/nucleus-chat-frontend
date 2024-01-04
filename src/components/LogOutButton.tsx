import { Button } from '@nextui-org/react'
import Cookies from 'js-cookie'
import { useAuth } from '../hooks/useAuth'

const LogOutButton = () => {
  const { setIsLoggedIn } = useAuth()
  const handleLogOut = () => {
    Cookies.remove('token')
    setIsLoggedIn(false)
  }

  return (
    <Button
      variant="ghost"
      className="font-bold"
      color="danger"
      onClick={() => handleLogOut()}
    >
      Cerrar Sesión
    </Button>
  )
}

export default LogOutButton
