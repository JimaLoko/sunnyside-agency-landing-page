import styled from "styled-components";

export const Card = styled.div `
    grid-area: ${props => props.gridArea};
    background: url(${props => props.bgImg}) center;
    background-size: cover;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    color: ${props => props.textColor};

    transition: all .5s ease-in;
    &:hover {
        transform: scale(1.05);
        border-radius: 15px;
        box-shadow: 5px 5px 15px 5px #FF8080, -9px 5px 15px 5px #FFE488, -7px -5px 15px 5px #8CFF85, 12px -5px 15px 5px #80C7FF, 12px 10px 15px 7px #E488FF, -10px 10px 15px 7px #FF616B, -10px -7px 27px 1px #8E5CFF, 5px 5px 15px 5px rgba(0,0,0,0);
    }
    @media (max-width:1050px) {
            pointer-events: none;
        }

    h2 {
        font-family: var(--Fraunces);
        font-weight: 900;
        margin-bottom: 3rem;
    }

    p {
        width: 52%;
        margin: 0 auto;
        margin-bottom: 5rem;
        font-family: var(--Barlow);
        font-weight: 600;
    }

    @media (max-width:450px) {
        background: url(${props => props.bgImgMobile}) no-repeat top center;
        background-size: cover;
        padding: 3.2rem;

        h2 {

        }

        p {
            font-size: 1.5rem;
            width: 101%;
            line-height: 3rem;
        }
    }
` 