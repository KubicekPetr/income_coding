import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = () => (
    <div>
        <ShoppingIcon style={{ width: '24px', height: '24px' }} />
        <span>0</span>
    </div>
);

export default CartIcon;