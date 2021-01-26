import React from 'react';

import { connect } from 'react-redux';

import { addItem, removeItem, removeItemSet } from '../../redux/cart/cart.actions';

const CheckoutItem = ({ item, addItem, removeItem, removeItemSet }) => {
    const { name, quantity, price } = item;
    return (
        <tr>
            <td>{name}</td>
            <td>
                <span onClick={() => removeItem(item)}>&#10094;&#0009;</span>
                {quantity}
                <span onClick={() => addItem(item)}>&#0009;&#10095;</span>
            </td>
            <td>{price}$</td>
            <td onClick={() => removeItemSet(item)}>&#10005;</td>
        </tr>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item)),
    removeItemSet: item => dispatch(removeItemSet(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);