import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/navbar'
import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeSwitcher from './ThemeSwitcher'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = ['Chat', 'Documentation', 'Log Out']

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
      <NavbarContent className="hidden gap-4 md:flex" justify="center">
        <NavbarItem>
          <Link to="/chat">CHAT</Link>
        </NavbarItem>
        <NavbarItem>
          <Link to="/documentation">DOCUMENTATION</Link>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="hidden sm:flex">
        <NavbarItem>
          <Button variant="bordered" color="primary" className="font-bold">
            Crear Cuenta
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button color="primary" className="font-bold text-white">
            Iniciar Sesión
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-indigo-50 dark:bg-zinc-900">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? 'primary'
                  : index === menuItems.length - 1
                    ? 'danger'
                    : 'foreground'
              }
              className="w-full"
              to="/"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
