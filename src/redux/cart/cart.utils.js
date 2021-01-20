export const addNewOrAdditionalItemToCart = (cartItems, newItem) => {
    const itemExists = cartItems.find(item => item.id === newItem.id);
    if (itemExists) {
        return cartItems.map(item => 
            item.id === newItem.id 
            ? {...item, quantity: itemExists.quantity + 1} 
            : item
        );

    }

    return [...cartItems, { ...newItem, quantity: 1 }];
};