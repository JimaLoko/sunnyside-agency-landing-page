import styled from "styled-components";

export const NavBar = styled.ul `
    display: flex;
    list-style: none;
    align-items: center;

    li:not(:first-child) {
        margin-left: 4rem;
    }
    
    li:last-child button {
        color: black;
        text-transform: uppercase;
        font-weight: 700;
        font-family: var(--Fraunces);
        background-color: var(--White);
        padding: 1.5rem 2rem;
        border-radius: 27px;
    }
    li:last-child button:hover {
        color: var(--White);
        background-color: rgba(255, 255, 255, 0.3);
        border: none;
        
    }

    button {
        border: none;
        background: none;
        color: var(--White);
        transition: all .3s ease-out;
    }
   
    button:hover {
        transform: scale(1.1);
        border-bottom: 2px solid var(--White);
        padding-bottom: .5rem;
    }
    
`