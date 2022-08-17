import styled from "styled-components";

export const Container = styled.section `
    height: 77rem;
    padding: 0 4.3rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows:  3rem 1fr;
    grid-template-areas: 
    "title title title"
    "item1 item2 item3";
`

export const Title = styled.h2 `
grid-area: title;
    color: var(--Grayish-blue);
    font-family: var(--Fraunces);
    font-weight: 900;
    font-size: 2.1rem;
    letter-spacing: 0.5rem;
    text-transform: uppercase;
    text-align: center;
    margin-top: 9rem;
`