import CartActionTypes from './cart.types';
import {
    addNewOrAdditionalItemToCart,
    removeItemFromCart,
} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden,
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addNewOrAdditionalItemToCart(state.cartItems, action.payload),
            };
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload),
            };
        case CartActionTypes.REMOVE_ITEM_SET:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id),
            };
        default:
            return state;
    }
};

export default cartReducer;