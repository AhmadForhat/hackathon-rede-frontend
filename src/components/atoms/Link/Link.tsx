import React from 'react'

import { LinkContainer } from './styles'

interface LinkProps {
  to: string;
}

const Link: React.FC<LinkProps> = ({
  to,
  ...props
}) => {
  return (
    <LinkContainer to={to} {...props} />
  )
}

export default Link
