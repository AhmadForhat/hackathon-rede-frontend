import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  textarea {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.grayDarker};
    border-radius: 8px;
    padding: 5px;
    margin-top: 10px;

    outline:0;
  }
`;
