import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import DATA from './shop.data';

class Shop extends React.Component {
    constructor() {
        super();

        this.state = {
            collections: DATA,
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div>
                {collections.map(({id, ...collectionProps}) => (
                    <CollectionPreview {...collectionProps} key={id} />
                ))}
            </div>
        );
    }
}

export default Shop;