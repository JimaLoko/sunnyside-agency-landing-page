import styled from "styled-components";

export const Card = styled.div `
    grid-area: ${props => props.gridArea};
    background-color: ${props => props.inputColor};
    padding: 15rem;
    position: relative;

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
`