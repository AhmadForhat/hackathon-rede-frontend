import styled from 'styled-components'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hasPadding?: boolean
  hasBoxShadow?: boolean
}

export const Container = styled.div<CardProps>`
  border-radius: 20px 20px 0px 0px;
  padding: ${({hasPadding}) => hasPadding ? '20px' : '0'};
  height: 100%;
  background: ${({ theme }) => theme.colors.whiteSecondary};
  box-shadow:${({ hasBoxShadow }) => hasBoxShadow && '0px 4px 4px 3px rgba(0, 0, 0, 0.25);'};
  overflow: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  gap: 20px;
  margin-bottom: 80px;
`
