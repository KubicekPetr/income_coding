import React from 'react';

import { connect } from 'react-redux';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
    <div>
        { cartItems.map(item => <CartItem key={item.id} item={item} />) }
        <Button>Go to checkout</Button>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
});

export default connect(mapStateToProps)(CartDropdown);