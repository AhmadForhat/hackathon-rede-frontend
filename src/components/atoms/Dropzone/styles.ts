import styled from "styled-components";

interface Props {
    haveItems: boolean;
}

export const Container = styled.div<Props>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: ${({ haveItems} ) => haveItems ? '0px' : '2px'};
  border-radius: 2px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-style: dashed;
  background-color: #fafafa;
  color: ${({ theme }) => theme.colors.grayDarker};
  outline: none;
  transition: border 0.24s ease-in-out;

  p,
  strong {
    font-size: ${({ theme }) => theme.fonts.size.medium};
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
