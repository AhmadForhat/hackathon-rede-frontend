import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu as MenuIcon, X as CloseIcon } from 'react-feather'

import Link from 'components/atoms/Link'

import {
  Container,
  ButtonMenu,
  ContainerOptions
} from './styles'

type optionsProps = {
  to: string,
  text: React.ReactNode
}

interface MenuHamburgerProps extends React.HTMLAttributes<HTMLDivElement> {
  options: optionsProps[]
}

const MenuHamburger: React.FC<MenuHamburgerProps> = ({
  options
}) => {
  const [isOpen, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <Container visible={isOpen}>
        <ButtonMenu visible={true} onClick={() => setOpen(false)}>
          <CloseIcon size={28} />
        </ButtonMenu>
        <ContainerOptions>
          {options.map(option => (
              <Link
                key={option.to}
                to={option.to}
                actived={pathname === option.to}
              >
                {option.text}
              </Link>
          ))}
        </ContainerOptions>
      </Container>
      <ButtonMenu visible={!isOpen} onClick={() => setOpen(true)}>
        <MenuIcon size={28} />
      </ButtonMenu>
    </>
  )
}

export default MenuHamburger
