import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <h2>From admin: Header & Outlet</h2>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Admin;