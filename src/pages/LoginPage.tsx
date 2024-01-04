import { Button, Card, Input } from '@nextui-org/react'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
export default function LoginPage() {
  const { isLoggedIn, setIsLoggedIn } = useAuth()
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const callApi = async () => {
    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username: userName,
        password: password,
      })
      const token = response.data.token
      Cookies.set('token', token, { expires: 1 })
      console.log(response.data)
      if (response.status !== 200) {
        throw new Error(response.statusText)
      }
      if (Cookies.get('token')) {
        console.log('cookie creada')
        setIsLoggedIn(true)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault()
    callApi()
    setUserName('')
    setPassword('')
  }
  if (isLoggedIn) {
    return <Navigate to="/chat" />
  } else {
    return (
      <section className="grid place-items-center pt-12 lg:pt-32">
        <Card>
          <form
            action=""
            className="flex flex-col gap-4 rounded-md p-4 text-black indigo-light dark:text-white dark:indigo-dark"
          >
            <div>
              <h2>Iniciar Sesión</h2>
              <Input
                value={userName}
                variant="bordered"
                onChange={(e) => setUserName(e.target.value)}
                size="sm"
                labelPlacement="outside"
                label="nombre de usuario"
                type="text"
              />
              <Input
                variant="bordered"
                value={password}
                size="sm"
                onChange={(e) => setPassword(e.target.value)}
                labelPlacement="outside"
                label="contraseña"
                type="password"
                className="p-0"
              />
            </div>
            <Button onClick={handleSubmit} size="sm">
              Iniciar Sesión
            </Button>
          </form>
        </Card>
      </section>
    )
  }
}
