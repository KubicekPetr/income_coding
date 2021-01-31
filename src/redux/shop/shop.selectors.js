import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
    tshirts: 1,
    hoodies: 2,
    boots: 3,
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections =>
            collections.find(
                collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    );