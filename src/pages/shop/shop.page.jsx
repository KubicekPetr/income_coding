import React from 'react';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/collection.page';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const Shop = ({ match }) => (
    <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
);

export default Shop;