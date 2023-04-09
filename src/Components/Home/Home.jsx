import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import TShirt from '../T-Shirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const allTShirts = useLoaderData()
    console.log(allTShirts);
    return (
        <div className='homeContainer'>
            <h2>This is Home page</h2>
            <p>Total t-shirt: {allTShirts.length}</p>

            {/* Use map() for loop through 'allTShirt' array */}
            <div className="productContainer">
            {
                allTShirts.map((tShirt) => <TShirt
                key = {tShirt._id}
                tShirt = {tShirt}
                ></TShirt>)
            }
            </div>
            <div className="cartContainer">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;