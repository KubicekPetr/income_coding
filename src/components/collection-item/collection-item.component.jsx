import React from 'react';

const CollectionItem = ({name, price}) => (
    <div>
        <span>{name}</span>
        <span>- {price}$</span>
    </div>
);

export default CollectionItem;