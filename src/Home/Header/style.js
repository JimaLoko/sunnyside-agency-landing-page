import styled from "styled-components";
import bgImg from "../../images/desktop/image-header.jpg"

export const HeaderDiv = styled.header `
    background: url(${bgImg}) center;
    background-size: cover;
    width: 100%;
    height: 80rem;
    display: flex;
    flex-direction: column;

    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 3rem;
        margin-bottom: 10rem;
    }
    h1 {
        text-align: center;
        color: var(--White);
        font-size: 6.2rem;
        letter-spacing: 1.2rem;
        margin-bottom: 7rem;
        text-transform: uppercase;
        font-family: var(--Fraunces);
        font-weight: 900;
    }

    .arrow {
        width: 10rem;
        height: 12rem;
        align-self: center;
        display: flex;
        justify-content: center;
    }
    .arrow img {
        max-width: 100%;
    }
`