import { useState } from 'react'
import { AuthContext } from './AuthContext'

interface props {
  children: JSX.Element | JSX.Element[]
}

export function AuthProvider(props: props) {
  const [authUser, setAuthUser] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const value = {
    authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn,
  }

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  )
}
