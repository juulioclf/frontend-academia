import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    align-items: center;
    background-color: var(--amarelo);
`

export const Menu = styled.ul`
    padding-left: 32em;
    cursor: pointer;
    display: flex;
    list-styles:none;
`

export const Opcoes = styled.li`
    display: flex;
    align-items: center;
    padding-left: 2em;
    font-size: 22px;
    font-family: 'Oswald', sans-serif;;

    &:hover {
        transition: 0.5s;
        color: white;
        text-shadow: 1px 1px 2px black;
    }

    hr {
        margin-right: 2em;
        height: 35px;
        border-color: #030303;
    }
`