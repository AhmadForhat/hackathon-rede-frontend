import React from 'react';

import ReactDropzoneInput from 'components/atoms/Dropzone';
import LabelInput from 'components/atoms/LabelInput';

import { Container } from './styles';

const Drop: React.FC = ({ name, label }: any) => {
    return (
        <>
            {label && (
                <LabelInput htmlFor={name}>
                    {label}
                </LabelInput>
            )}
            <ReactDropzoneInput name={name} />
        </>
    )
}

export default Drop;