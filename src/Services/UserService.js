import axios from 'axios';

export default class UserServices {
    constructor () {
    this.axios = axios.create({
        baseURL: process.env.REACT_APP_API_LOGIN
    })
}

 async login (dados) {
    const {data} = await this.axios.post('/login', dados)

    if (data) {
        localStorage.setItem("nome", data.user.name)
        localStorage.setItem("email", data.user.email)
        localStorage.setItem("token", data.token.token)

        return true
    }

    return
 }

 usuarioAutenticado () {
    return localStorage.getItem("token") !== undefined ? true : false
 }

 async logout () {
    localStorage.removeItem("token")
    localStorage.removeItem("nome")
    localStorage.removeItem("email")
 }
}


