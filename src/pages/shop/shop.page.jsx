import React from 'react';
import { Route } from 'react-router-dom';

import CategoryPage from '../../pages/category/category.page';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const Shop = ({ match }) => (
    <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
    </div>
);

export default Shop;