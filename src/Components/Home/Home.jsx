import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const allTshirts = useLoaderData()
    return (
        <div>
            <h2>This is Home page</h2>
            <p>Total t-shirt: {allTshirts.length}</p>
        </div>
    );
};

export default Home;