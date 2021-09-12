import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.family.primary};
  color: ${({theme}) => theme.colors.primary};
  font-size: ${({theme}) => theme.fonts.size.medium};
  text-decoration: none;

  svg {
    margin-right: 5px;
  }

  :hover {
    color: ${({theme}) => theme.colors.secondary};
  }
`
