import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import Home from '../Pages/Home/index';
import Login from '../Pages/Login/index';
import Cadastro from '../Pages/Cadastro/index';

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastrar' element={<Cadastro />} />
                <Route path='/sistema' element={
                    <ProtectedRoutes>
                        <h1>Seja bem-vindo ao sistema </h1>
                    </ProtectedRoutes>
                } />
            </Routes>
        </Router>
    );
}

export default Routering;

