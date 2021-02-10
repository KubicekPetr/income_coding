import React from 'react';

const CartItem = ({ item: { name, price, quantity }}) => (
    <div>
        <span>{name}</span>
        <span> - {quantity} x {price}$</span>
    </div>
);

export default CartItem;