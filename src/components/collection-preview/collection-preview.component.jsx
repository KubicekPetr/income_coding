import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div>
        <h1>{title}</h1>
        <div>
            {items
                .filter((item, index) => index < 4)
                .map(({ id, ...itemProps }) => (
                    <CollectionItem key={id} {...itemProps} />
                ))}
        </div>
    </div>
);

export default CollectionPreview;