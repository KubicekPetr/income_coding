import React from 'react';

import CollectionItem from '../../components/collection-item/collection-item.component';

const Collection = ({ match }) => (
    <div>
        <h2>{match.params.collectionId}</h2>
    </div>
);

export default Collection;