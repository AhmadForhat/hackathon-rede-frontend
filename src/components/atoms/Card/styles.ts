import styled from 'styled-components'

interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
  hasPadding?: boolean
  hasBoxShadow?: boolean
  hasMarginBottom?: boolean
}

export const Container = styled.div<ICardProps>`
  border-radius: 20px 20px 0px 0px;
  padding: ${({hasPadding}) => hasPadding ? '20px' : '0'};
  height: 100%;
  background: ${({ theme }) => theme.colors.whiteSecondary};
  box-shadow: ${({ hasBoxShadow }) => hasBoxShadow && '0px 4px 4px 3px rgba(0, 0, 0, 0.5)'};
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  gap: 20px;
  margin-bottom: ${({ hasMarginBottom }) => hasMarginBottom ? '80px' : '0px'};
`
