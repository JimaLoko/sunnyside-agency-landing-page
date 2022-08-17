import styled from "styled-components";

export const Card = styled.div `
    grid-area: ${props => props.gridArea};
    background: url(${props => props.bgImg}) center;
    background-size: cover;
`