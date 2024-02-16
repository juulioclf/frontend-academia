import styled from "styled-components";

export const ImageContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    overflow: hidden;
    background-color: white;

`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;

`

export const FraseSobre = styled.div`
    position: absolute;
    top: 90%;
    left: 20%;
    transform: translate (-50%, -50%);
    color: var(--branco);

    h1 {
        position: relative;
        max-width: 100%;
        max-height: auto;
        font-size: 70px;
        font-family: var(--fonte-register);
        text-shadow: 2px 5px 10px black;
    }
`