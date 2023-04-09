import React, { useState } from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import TShirt from '../T-Shirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'

const Home = () => {
    const allTShirts = useLoaderData()
    // console.log(allTShirts);

    // For 'Marbo ekhane' method use useState
    const [cartContainer, setCartContainer] = useState([]);

    // Creating click handler for buy button or add to cart button
    const handleAddToCart = (addTShirt) => {
        console.log(addTShirt);

        /** 
         * We need to add new item to cart
         * As we can't push new item to 'state', we need to create a new array of items */
        const newCartContainer = [...cartContainer, addTShirt]
        setCartContainer(newCartContainer);
    };
    
    // Remove item from cart Handler
    const removeFromCartHandler = (removeTShirt) => {
        // console.log(item);
        const newCartContainer = cartContainer.filter(item => item._id !== removeTShirt);
        setCartContainer(newCartContainer);
    };
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
                handleAddToCart = {handleAddToCart}
                ></TShirt>)
            }
            </div>
            <div className="cartContainer">
                <Cart
                cartContainer = {cartContainer}
                removeFromCartHandler = {removeFromCartHandler}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;