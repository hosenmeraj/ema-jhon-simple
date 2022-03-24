import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Item: {cart.length}</p>
            <p>Price:</p>
            <p>Shiping:</p>
        </div>
    );
};

export default Cart;