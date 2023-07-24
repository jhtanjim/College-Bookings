import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Home from '../Pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>


        </div>
    );
};

export default Main;