import React from 'react';
import Login from '../Pages/Login/index';
import Home from '../Pages/Home/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Routering = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={ < Home/> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/sistema' element={
                    <h1>Seja bem vindo ao sistema</h1>
                }
                />
            </Routes>
        </Router>
    )
}

export default Routering;