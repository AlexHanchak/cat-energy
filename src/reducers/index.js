import updateFoodList from "./food-list";
import updateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {

    return {
        foodList: updateFoodList(state, action),
        shoppingCart: updateShoppingCart(state, action)
    }
};

export default reducer;