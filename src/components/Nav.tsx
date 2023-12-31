import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import LoginButton from './LogInButton'
import LogOutButton from './LogOutButton'
import RegisterButton from './RegisterButton'
import ThemeSwitcher from './ThemeSwitcher'

export default function Nav() {
  const { isLoggedIn } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Navbar maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        className="md:hidden"
      />
      <NavbarBrand>
        <Link to="/" className="flex gap-2">
          <img width={30} height={30} src="/icon.svg" alt="" />
          <p className="font-bold text-inherit">NUCLEUS CHAT</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="gap-4" justify="center">
        <NavbarItem className="hidden md:flex">
          <Link to="/chat">CHAT</Link>
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Link to="/documentation">DOCUMENTATION</Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>{!isLoggedIn && <RegisterButton />}</NavbarItem>
        <NavbarItem>
          {isLoggedIn ? <LogOutButton /> : <LoginButton />}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-indigo-50 dark:bg-[#000]">
        <NavbarMenuItem>
          <Link color="primary" className="w-full" to="/">
            Chat
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="primary" className="w-full" to="/">
            Documentación
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>{!isLoggedIn && <RegisterButton />}</NavbarMenuItem>
        <NavbarMenuItem>
          {isLoggedIn ? <LogOutButton /> : <LoginButton />}
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}
