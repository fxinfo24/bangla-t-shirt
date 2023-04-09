import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt, handleAddToCart}) => {
    // console.log(tShirt);
    // Destructuring object 'tShirt'. This is not an array
    const {_id, index, price, picture, name, gender} = tShirt;
    return (
        <div className='tShirtContainer'>
            <h3>This is T-Shirt component</h3>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h5>Price: ${price}</h5>
            <p>For: {gender}</p>
            <p>{_id}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;