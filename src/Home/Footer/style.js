import styled from "styled-components";

export const FooterDiv = styled.section `
    background-color: var(--Dark-moderate-cyan);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 35rem;

    img {
        margin-bottom: 4rem;
        filter: brightness(0) saturate(100%) invert(24%) sepia(90%) saturate(278%) hue-rotate(116deg) brightness(91%) contrast(87%);
    }
`