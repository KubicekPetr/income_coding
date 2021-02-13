import React from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import CollectionPage from '../collection/collection.page';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionPageWithSpinner = WithSpinner(CollectionPage);
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

class Shop extends React.Component {
    state = {
        loading: true,
    };

    unsubscribeFromSnaphost = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        this.unsubscribeFromSnaphost = collectionRef.onSnapshot(async snaphost => {
            const collectionsMap = convertCollectionsSnapshotToMap(snaphost);
            updateCollections(collectionsMap);
            this.setState({ loading: false });
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromSnaphost();
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div>
                <Route exact path={`${match.path}`} render={
                    (props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                } />
                <Route path={`${match.path}/:collectionId`} render={
                    (props) => <CollectionPageWithSpinner isLoading={loading} {...props} />
                } />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
})

export default connect(null, mapDispatchToProps)(Shop);