import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectShopItems } from '../../redux/shop/shop.selectors';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const Shop = ({ shopItems }) => (
    <div>
        {shopItems.map(({ id, ...collectionProps }) => (
            <CollectionPreview {...collectionProps} key={id} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    shopItems: selectShopItems
});

export default connect(mapStateToProps)(Shop);