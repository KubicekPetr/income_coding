import React from 'react';

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import Button from '../button/button.component';

const CollectionItem = ({ item, addItem }) => {
    const { name, price } = item;
    return (
        <div>
            <span>{name}</span>
            <span> - {price}$</span>
            <Button onClick={() => addItem(item)}>Add to cart</Button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);