import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Admin = () => {
    return (
        <div>
            <h2>From admin: Header & Outlet</h2>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Toaster></Toaster> */}
            <Toaster />
        </div>
    );
};

export default Admin;