import { Button, Card, Input } from '@nextui-org/react'
import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function RegisterPage() {
  const url = 'http://localhost:8080/auth/register'
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const { isLoggedIn, setIsLoggedIn } = useAuth()

  const callApi = async () => {
    try {
      const response = await axios.post(
        url,
        {
          username: userName,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      if (response.status !== 200) {
        throw new Error(response.statusText)
      }
      if (response.data && response.status === 200) {
        console.log('cookie creada')
        setIsLoggedIn(true)
      }
      console.log('Respuesta del servidor:', response.data)
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    callApi()
    setUserName('')
    setPassword('')
  }
  {
    if (isLoggedIn) {
      return <Navigate to="/chat" />
    } else {
      return (
        <section className="grid place-items-center pt-12 lg:pt-32">
          <Card>
            <form
              action="submit"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-md p-4 text-black indigo-light dark:text-white dark:indigo-dark"
            >
              <div>
                <h2>Registrar Usuario</h2>
                <Input
                  variant="bordered"
                  size="sm"
                  labelPlacement="outside"
                  label="nombre de usuario"
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
                <Input
                  variant="bordered"
                  size="sm"
                  labelPlacement="outside"
                  label="contraseña"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-0"
                />
              </div>
              <Button type="submit" size="sm">
                Registrar
              </Button>
            </form>
          </Card>
        </section>
      )
    }
  }
}
