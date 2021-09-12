import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface LinkProps {
  to: string;
  actived?: boolean
}

export const LinkContainer = styled(Link)<LinkProps>`
  display: flex;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.family.primary};
  color: ${({theme, actived}) => actived ? theme.colors.secondary : theme.colors.primary};
  font-size: ${({theme}) => theme.fonts.size.medium};
  text-decoration: none;

  svg {
    margin-right: 5px;
  }

  :hover {
    color: ${({theme}) => theme.colors.secondary};
  }
`
