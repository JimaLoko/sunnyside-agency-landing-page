import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-area: ${props => props.gridArea};

    p {
        color: var(--Very-dark-grayish-blue);
        font-family: var(--Barlow);
        font-weight: 600;
        margin-bottom: 8rem;
        width: 77%;
        line-height: 3rem;
    }
`

export const Image = styled.div `
    width: 7rem;
    border-radius: 10px;
    margin-bottom: 8rem;
    img {
        max-width: 100%;
        border-radius: 50%;
    }
`

export const User = styled.div `
    
    h3 {
        font-family: var(--Fraunces);
        font-weight: 900;
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }

    span {
        color: var(--Grayish-blue);
        font-family: var(--Barlow);
        font-weight: 600;
        font-size: 1.6rem;
    }
`