import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  textarea {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.grayDarker};

    outline:0;
  }
`;
