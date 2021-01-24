import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const Checkout = ({ cartItems, total }) => (
    <div>
        <h1>Cart checkout</h1>
        <table style={{borderSpacing: '10px', textAlign: 'center'}}>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Remove</th>
            {cartItems.map(item => (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity} x {item.price}$</td>
                    <td>✖</td>
                </tr>
            ))}
        </table>
        <h4><br />Total: {total}$</h4>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);