import React from 'react';

import Textarea from 'components/atoms/TextArea';
import LabelInput from 'components/atoms/LabelInput';

interface TextAreaProps  {
    label?: string
    name: string,
    rows?: number
}

const TextAreaCustom: React.FC<TextAreaProps> = ({ label, name, ...props }) => {
    return (
        <div>
            {label && (
                <LabelInput htmlFor={name}>
                    {label}
                </LabelInput>
            )}
            <Textarea name={name} {...props }/>
        </div>)
}

export default TextAreaCustom;