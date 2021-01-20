import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div onClick={toggleCartHidden}>
        <ShoppingIcon style={{ width: '24px', height: '24px' }} />
        <span>{itemCount}</span>
    </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
    itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
