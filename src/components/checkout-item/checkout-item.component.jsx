import React from 'react';

const CheckoutItem = ({ item: { name, quantity, price } }) => (
    <tr>
        <td>{name}</td>
        <td>{quantity}</td>
        <td>{price}$</td>
        <td>&#10005;</td>
    </tr>
);

export default CheckoutItem;