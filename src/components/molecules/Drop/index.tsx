import React from 'react';

import ReactDropzoneInput from 'components/atoms/Dropzone';
import LabelInput from 'components/atoms/LabelInput';

import { Container } from './styles';

interface DropProps extends React.HTMLAttributes<HTMLInputElement> {
    label?: string
    name: string
}

const Drop: React.FC<DropProps> = ({ name, label, ...props }) => {
    return (
        <Container>
            {label && (
                <LabelInput htmlFor={name}>
                    {label}
                </LabelInput>
            )}
            <ReactDropzoneInput name={name} />
        </Container>
    )
}

export default Drop;