import React from 'react'
import { ArrowLeft } from 'react-feather'

import Menu from 'components/molecules/MenuHamburger'
import Link from 'components/atoms/Link'

import {
  Container,
  Title,
  SubTitle
} from './styles'

interface HeaderProps {
  title: React.ReactNode
  subTitle?: React.ReactNode
  to?: string
  hiddenMenu?: boolean
}

const options = [
  {
    to: '/',
    text: 'Home'
  },
  {
    to: '/reportes',
    text: 'Reportes'
  },
  {
    to: '/criar-reporte',
    text: 'Criar Reporte'
  },
  {
    to: '/perfil',
    text: 'Perfil'
  },
  {
    to: '/login',
    text: 'Sair',
    logoff: true
  },
]

const Header: React.FC<HeaderProps> = ({
  title,
  subTitle,
  children,
  to,
  hiddenMenu
}) => {
  return (
    <>
      {!hiddenMenu && <Menu options={options} />}
      <Container>
        {to && <Link to={to}><ArrowLeft size='16px'/> Voltar</Link>}
        {subTitle && <SubTitle>{subTitle}</SubTitle>}
        <Title>{title}</Title>
        {children}
      </Container>
    </>
  )
}

export default Header
