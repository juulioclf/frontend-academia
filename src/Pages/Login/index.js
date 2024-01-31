import React, {useState} from "react";
import { Container, Form } from './styles'
import InputLogin from "../../Components/Input";
import BotaoLogin from "../../Components/Button-Page-Login";
import { validarEmail, validarSenha } from "../../Utils/Validadores";
import { GetLogin } from "../../Services/UserServices/UserService";

export default function Login() {

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({});

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            setLoading(true)
            const response = await GetLogin(form);
            console.log('response do login', response)
            if (response === true) {
                alert('usuario logado com sucesso')
                //navegar para a home
            }
        }
        catch (err) {
            alert('Algo deu errado com o seu Login' + err)
        } finally {
            setLoading(false)
        }
        
    }

    const handleChange = (event) => {
        setForm({...form, [event.currentTarget.name]: event.currentTarget.value })
    }

    const validadorInput = () => {
        return validarEmail(form.email) && validarSenha(form.password)
    }

    console.log('O form está valido ?', validadorInput());

    return (
        <Container>
            <Form>
                <h1>Seja Bem-vindo(a) ao Sistema</h1>
                <InputLogin
                    name='email'
                    placeholder='Digite seu e-mail'
                    onChange={handleChange}
                    type='email' 
                />
                <InputLogin
                    name='password'
                    placeholder='Digite sua senha'
                    onChange={handleChange}
                    type='password'
                />
                <BotaoLogin
                    type='submit'
                    text='Acessar'
                    onClick={handleSubmit}
                    disabled={loading === true || !validadorInput()} 
                />

                <div>
                    <p>Não possui conta?</p>
                    <a>Cadastre-se</a>
                </div>
                
            </Form>
        </Container>
    )
}