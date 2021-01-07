import React from 'react';

const CollectionPreview = ({title, items}) => (
    <div>
        <h1>Title</h1>
            <div>
                {items
                .filter((item, index) => index < 4)
                .map(item => (
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
    </div>
);

export default CollectionPreview;