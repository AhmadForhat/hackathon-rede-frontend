import styled from 'styled-components';

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
    padding-bottom: 70px;

    width: 100%;
`

export const Image = styled.img`
    width: 100%;
    max-height: 250px;
    object-fit: cover;
    height: auto;
`

export const ContainerButtons = styled.div`
    display:flex;
    align-items:center;
    gap: 8px;
`

export const ContentDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 20px;
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

export const CotainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    gap: 20px;
`
