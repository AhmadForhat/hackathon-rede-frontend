import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  textarea {
    margin-top: 10px;
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.grayDarker};
    border-radius: 8px;
    margin-top: 10px;
    font-family: ${({theme}) => theme.fonts.family.primary};
    font-size: ${({theme}) => theme.fonts.size.medium};
    padding: 10px;

    outline:0;
  }
`;
