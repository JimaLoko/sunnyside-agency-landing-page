import styled from "styled-components";

export const Card = styled.div `
    grid-area: ${props => props.gridArea};
    background: url(${props => props.bgImg}) center no-repeat;
    background-size: cover;
    @media (max-width:1050px) {
    background: url(${props => props.bgImgMobile}) no-repeat center;
    background-size: contain;
    }
    @media (max-width:500px) {
    background-size: cover;
    }
`