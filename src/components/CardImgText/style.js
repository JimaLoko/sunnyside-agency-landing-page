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
` 