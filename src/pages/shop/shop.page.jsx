import React from 'react';
import { Route } from 'react-router-dom';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import CollectionPage from '../collection/collection.page';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

class Shop extends React.Component {
    unsubscribeFromSnaphost = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snaphost => {
            convertCollectionsSnapshotToMap(snaphost);
        });
    }

    render() {
        const match = this.props;
        return  (
            <div>
                <Route exact path={`${match.path}`} component={CollectionsOverview} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        );
    }
}

export default Shop;