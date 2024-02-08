import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100vh;
    min-width: 100vw;
    background-color: var(--vermelho);

`

export const Form = styled.form`
    display: flex;
    padding: 4rem;
    flex-direction: column;
    margin-right: 10em;
    align-items: center;
    justify-content:center;
    background-color: #1B1717;
    border-radius: 60px;
    box-shadow: 4px 2px 15px 3px black;
    width: 100%;
    max-width: 650px;
    gap: 30px 0px;

    h1 {
        color: white;
        font-family: var(--fonte);
        font-size: 26px;
        font-weight: light;
    }

    p {
        color: white;
        font-size: 16px;
        font-weight: 600;
    }

    a {
        color: white;
        font-size: 14px;
    }
`

export const SubcontainerSign = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0px 10px;
    align-items: center;
`