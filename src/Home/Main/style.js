import styled from "styled-components";

export const MainDiv = styled.main `
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 60rem);
    grid-template-areas: 
    "item1 item2"
    "item3 item4"
    "item5 item6"
    ;
    @media (max-width:1050px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 60rem);
        grid-template-rows: repeat(4, 1fr) repeat(2, 60rem);
        grid-template-areas: 
        "item2"
        "item1"
        "item3"
        "item4"
        "item5"
        "item6";
    }
`