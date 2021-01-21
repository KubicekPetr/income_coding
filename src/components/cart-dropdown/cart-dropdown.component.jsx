import React from 'react';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems }) => (
    <div>
        { cartItems.map(item => <CartItem key={item.id} item={item} />) }
        <Button>Go to checkout</Button>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);