import React from 'react';

import { connect } from 'react-redux';

import { removeItem } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, dispatch }) => {
    const { name, quantity, price } = item;
    return (
        <tr>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{price}$</td>
            <td onClick={() => dispatch(removeItem(item))}>&#10005;</td>
        </tr>
    );
};

export default connect()(CheckoutItem);