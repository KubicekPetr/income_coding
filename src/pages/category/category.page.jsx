import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

const Category = ({ match }) => (
    <div>
        <h2>{match.params.categoryId}</h2>
    </div>
);

export default Category;