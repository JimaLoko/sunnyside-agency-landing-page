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
        border-bottom: 2px solid red;
    }
`