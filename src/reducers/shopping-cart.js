
const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
};

const updateCartItem = (food, item = {}, quantity) => {

    const {
        id = food.id,
        title = food.title,
        weight = 0,
        taste = food.taste,
        price = 0,
        count = 0
    } = item;

    return {
        id,
        title,
        weight: weight + food.weight,
        taste,
        price: price + quantity * food.price,
        count: count + quantity
    }

};

const updateOrder = (state, foodId, quantity) => {
    const { foodList: {foods}, shoppingCart: {cartItems}} = state;
    const food = foods.find(({id}) => id === foodId);
    const itemIndex = cartItems.findIndex(({id}) => id === foodId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(food, item, quantity);
    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
};

const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {
        case 'FOOD_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'FOOD_REMOVED_FROM_CART':
            return updateOrder(state, action.payload, -1);
        case 'ALL_FOODS_REMOVED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default:
            return state.shoppingCart;
    }
};

export default updateShoppingCart;