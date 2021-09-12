import styled from 'styled-components';

import Button from "components/atoms/Button";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    like?: boolean
}

export const Container = styled.div`
    display:flex;
    flex-direction: column;
`;

export const Content = styled.div`
    display:flex;
    flex-direction: column;
    gap: 8px;

    width: 100%;
`

export const Image = styled.img`
    width: 100%;
    object-fit: cover;
    height: auto;
`

export const ContainerButtons = styled.div`
    display:flex;
    align-items:center;
    gap: 8px;
`

export const ButtonStyled = styled(Button)<IButtonProps>`
    svg {
        margin: ${({ like }) => like ? '-3px 0 0 8px' : '0 0 0 8px'};
        width: 18px;
        height: 18px;
    }
`

export const ContentDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

export const Descriptions = styled.div<IButtonProps>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.ink};
  font: normal normal 700 15px 'Roboto', sans-serif;
  margin: -10px 0px -20px 0;

  svg {
    margin-left: 5px;
    width: 14px;
    height: 14px;
  }
`