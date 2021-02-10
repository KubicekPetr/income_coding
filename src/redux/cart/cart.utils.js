export const addNewOrAdditionalItemToCart = (cartItems, newItem) => {
    const itemExists = cartItems.find(item => item.id === newItem.id);
    if (itemExists) {
        return cartItems.map(item => 
            item.id === newItem.id 
            ? {...item, quantity: item.quantity + 1} 
            : item
        );

    }

    return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
    if (itemToRemove.quantity > 1) {
        return cartItems.map(item => 
            item.id === itemToRemove.id
            ? {...item, quantity: item.quantity - 1}
            : item
            );
    }

    return cartItems.filter(item => item.id !== itemToRemove.id);
};