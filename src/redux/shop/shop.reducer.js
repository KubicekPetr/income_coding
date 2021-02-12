import DATA from "./shop.data";

import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: DATA,
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ShopActionTypes.UPDATE_COLLECITONS:
            return {
                ...state,
                collections: action.payload,
            };
        default:
            return state;
    }
};

export default shopReducer;