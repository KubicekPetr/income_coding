import React from 'react';

import Button from '../button/button.component';

const CollectionItem = ({name, price}) => (
    <div>
        <span>{name}</span>
        <span>- {price}$</span>
        <Button>Add to cart</Button>
    </div>
);

export default CollectionItem;