export const addNewOrAdditionalItemToCart = (cartItems, newItem) => {
    const itemExists = cartItems.find(item => item.id === newItem.id);
    if (itemExists) {
        return [
            ...cartItems.filter(item => item.id !== newItem.id),
            {
                ...itemExists,
                ...{ quantity: itemExists.quantity + 1 },
            },
        ];
    }

    return [...cartItems, { ...newItem, quantity: 1 }];
};