import styled from "styled-components";

export const NavDiv = styled.nav `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 17rem;
`

export const Nav = styled.ul `
    display: flex;
    list-style: none;
    
    li:not(:first-child) {
        margin-left: 4rem;
    }
    
    button {
        background: none;
        border: none;
        color: var(--Dark-desaturated-cyan);
        font-family: var(--Barlow);
        font-weight: 600;
        font-size: 1.8rem;
        transition: all .5s;
    }

    button:hover {
        color: white;
        filter: brightness(0) saturate(100%) invert(100%) sepia(100%) saturate(0%) hue-rotate(231deg) brightness(101%) contrast(102%);
        transform: scale(1.1);
    }
`