import styled from "styled-components";

export const Nav = styled.nav `
    position: relative;
`

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
    @media (max-width:1050px) {
        ::before {
            content: "";
            position: absolute;
            top: -20px;
            right: 0;
            border-color: var(--grayish-blue);
            border-style: solid;
            border-width: 20px 20px 0 20px;
            border-top-color: transparent;
            border-left-color: transparent;
            border-right-color: hsl(0, 0%, 100%);
            border-bottom-color: transparent;
            }
        opacity: 0;
        pointer-events: none;
        transition: all .3s ease-in-out;
        transform: translateY(-20px);
        position: absolute;
        z-index: 2;
        top: 9rem;
        right: 3rem;
        width: 85%;
        border-radius: 10px 0 10px 10px;
        flex-direction: column;
        background-color: white;
        padding: 3rem 0;

        li:not(:first-child) {
            margin-left: 0;
            margin-top: 3rem;
        }

        button {
            color: var(--Dark-grayish-blue);
            font-family: var(--Barlow);
            font-weight: 600;
        }

        li:last-child button {
        background-color: var(--Yellow);
        }
        li:last-child button:hover {
        color: var(--White);
        background-color: var(--Yellow);
        }
        &.active {
            opacity: 1;
            pointer-events: all;
            transform: translateY(0);
            box-shadow: 1px 1px 15px 0px rgba(0,0,0,0.69);
        }
    }
`
export const Hamburger = styled.button `
    display: none;
    border: none;
    background: none;

    @media (max-width:1050px) {
        display: block;
    }
`