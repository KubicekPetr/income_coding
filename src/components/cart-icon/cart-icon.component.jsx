import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div onClick={toggleCartHidden}>
        <ShoppingIcon style={{ width: '24px', height: '24px' }} />
        <span>{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
