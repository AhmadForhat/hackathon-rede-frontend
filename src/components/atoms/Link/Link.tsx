import React from 'react'

import { LinkContainer } from './styles'

interface LinkProps {
  to: string;
  actived?: boolean
}

const Link: React.FC<LinkProps> = ({
  to,
  actived,
  ...props
}) => {
  return (
    <LinkContainer actived={actived} to={to} {...props} />
  )
}

export default Link
