import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
        
const Checkout = ({ cartItems, total }) => (
    <div>
        <h1>Cart checkout</h1>
        <table style={{ borderSpacing: '10px', textAlign: 'center' }}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.map(item => (
                    <CheckoutItem key={item.id} item={item} />
                ))}
            </tbody>
        </table>
        <h4><br />Total: {total}$</h4>
        <div>
            *Please use the following test credit card for payments*<br />
            4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
        </div>
        <StripeButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);