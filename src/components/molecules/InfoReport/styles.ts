import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Title = styled.h2`
  margin: 0;
  font-family: ${({theme}) => theme.fonts.family.secondary};
  font-size: ${({theme}) => theme.fonts.size.large};
  font-weight: ${({theme}) => theme.fonts.weight.bold};
`
export const Value = styled.span`
  margin: 0;
  font-size: ${({theme}) => theme.fonts.size.medium};
`
