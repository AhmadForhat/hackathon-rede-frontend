import React, { ButtonHTMLAttributes } from 'react';

import { Button } from './styles';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const ButtonCenterMap: React.FC<ButtonProps> = (props) => {
  return <Button {...props}/>;
}

export default ButtonCenterMap;