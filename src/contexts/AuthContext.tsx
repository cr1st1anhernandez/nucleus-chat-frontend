import { createContext } from 'react'

interface AuthContextProps {
  authUser: string
  setAuthUser: React.Dispatch<React.SetStateAction<string>>
  isLoggedIn: boolean
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
)
