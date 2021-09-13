import styled from 'styled-components'

interface ContainerProps {
  fixed?: boolean
}

export const Container = styled.div<ContainerProps>`
  position: ${({fixed}) => fixed ? 'sticky' : 'none'};
  top: ${({fixed}) => fixed ? '0' : 'none'};
  z-index: 1200;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 2px 0px;
`

export const SubTitle = styled.h3`
  margin: 0;
  font-family: ${({theme}) => theme.fonts.family.secondary};
  font-size: ${({theme}) => theme.fonts.size.small};
  font-weight: ${({theme}) => theme.fonts.weight.regular};
  color: ${({theme}) => theme.colors.gray};
`

export const Title = styled.h2`
  margin: 10px 0 0;
  font-family: ${({theme}) => theme.fonts.family.secondary};
  font-size: ${({theme}) => theme.fonts.size.xlarge};
  font-weight: ${({theme}) => theme.fonts.weight.bold};
`
