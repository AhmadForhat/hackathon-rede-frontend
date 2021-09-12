import styled from 'styled-components';

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