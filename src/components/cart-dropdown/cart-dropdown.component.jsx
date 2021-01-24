import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ({ cartItems, dispatch, history }) => (
    <div>
        {
            cartItems.length 
            ? cartItems.map(item => <CartItem key={item.id} item={item} />) :
            <div>Your cart is empty</div>
        }
        <Button onClick={() => {
            dispatch(toggleCartHidden());
            history.push('/checkout');
        }}>Go to checkout</Button>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));