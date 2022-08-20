import styled from "styled-components";

export const Card = styled.div `
    grid-area: ${props => props.gridArea};
    background-color: white;
    padding: 15rem;

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
        width: 90%;
        font-size: 4rem;
        margin-bottom: 3rem;
    }

    p {
        margin-bottom: 4rem;
    }

    button {
        background: none;
        border: none;
        text-transform: uppercase;
        font-family: var(--Fraunces);
        font-weight: 900;
        position: relative;
    }

    button::after {
    content: "";
    background-color: ${props => props.lineColor};
    z-index: -1;
    border-radius: 3px;
    width: 11.3rem;
    display: block;
    height: 0.8em;
    position: absolute;
    top: 10px;
    left: -0.8rem;
    opacity: 0.4;
    transition: all .5s;
    }
    button:hover::after {
        opacity: 1;
    }

    hr {
        height: 1rem;
        width: 10rem;
        background-color: red;
        border: none;
        border-radius: 5px;
    }
    @media (max-width:1050px) {
        text-align: center;
        padding: 5rem 0 5rem 0;

        h2 {
            font-size: 3.4rem;
            width: 97%;
            margin: 0 auto 4rem auto;
        }

        p {
            width: 86%;
            line-height: 2.6rem;
            margin: 0 auto 3rem auto;
            color: var(--Dark-grayish-blue);
            font-family: var(--Barlow);
            font-weight: 600;
        }
    }
`