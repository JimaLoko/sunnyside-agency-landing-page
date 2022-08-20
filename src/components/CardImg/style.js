import styled from "styled-components";

export const Card = styled.div `
    grid-area: ${props => props.gridArea};
    background: url(${props => props.bgImg}) center no-repeat;
    background-size: cover;

    transition: all .5s ease-in;
    &:hover {
        transform: scale(1.05);
        border-radius: 15px;
        margin: 4rem;
        box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0);
    }
    @media (max-width:1050px) {
        pointer-events: none;
        }
    @media (max-width:1050px) {
    background: url(${props => props.bgImgMobile}) no-repeat center;
    background-size: contain;
    }
    @media (max-width:500px) {
    background-size: cover;
    }
`