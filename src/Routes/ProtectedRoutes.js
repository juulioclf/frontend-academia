import React from 'react';
import UserService from '../Services/UserService';
import { Router } from 'react-router-dom';

const userService = new UserService();

const ProtectedRoutes = ({children}) => {
    const usuarioAutenticado = userService.usuarioAutenticado()
    return usuarioAutenticado ? children: <Router/>
}