import styled from 'styled-components';

export const InputCustom = styled.input`    
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayDarker};
    color: #0A1530;
    outline: none;
    height: 28px;

    &::placeholder {
        color: #c3c3c3;
    }
`