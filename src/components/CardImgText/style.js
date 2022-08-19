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