import styled from "styled-components";

export const InputPersonalizado = styled.input`
    width: 100%;
    height: 100%;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, .2);
    outline: none;
    border-radius: 40px;
    font-size: 16px;
    color: var(--branco);
    padding: 15px 45px 15px 20px;

        input::placeholder {
            color: var(--branco);
        }
`