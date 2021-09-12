import React from 'react';

import { Label } from './styles';

interface LabelInputProps extends React.LabelHTMLAttributes<HTMLLabelElement>{}

const LabelInput: React.FC<LabelInputProps> = (props) => {
  return <Label {...props}/>;
}

export default LabelInput;
