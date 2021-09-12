import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 5px;
`

export const SubTitle = styled.h3`
  margin: 0;
  font-family: ${({theme}) => theme.fonts.family.secondary};
  font-size: ${({theme}) => theme.fonts.size.small};
  font-weight: ${({theme}) => theme.fonts.weight.regular};
  color: ${({theme}) => theme.colors.gray};
`

export const Title = styled.h2`
  margin: 0;
  font-family: ${({theme}) => theme.fonts.family.secondary};
  font-size: ${({theme}) => theme.fonts.size.xlarge};
  font-weight: ${({theme}) => theme.fonts.weight.bold};
`
