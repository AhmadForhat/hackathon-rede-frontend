import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 40px);
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  svg {
    width: 100%;
  }
`

export const Text = styled.h2`
  margin: 40px 0 0 0;
  font-family: ${({theme}) => theme.fonts.family.secondary};
  font-size: ${({theme}) => theme.fonts.size.large};
  font-weight: ${({theme}) => theme.fonts.weight.bold};
  color: ${({theme}) => theme.colors.ink}
`
