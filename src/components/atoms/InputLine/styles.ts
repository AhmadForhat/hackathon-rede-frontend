import styled from 'styled-components';

export const InputCustom = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayDarker};
    color: ${({ theme }) => theme.colors.ink};
    outline: none;
    height: 28px;
`