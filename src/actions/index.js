
const foodsLoaded = (newFood) => {
    return {
        type: 'FETCH_FOODS_SUCCESS',
        payload: newFood
    };
};

const foodsRequested = () => {
    return {
        type: 'FETCH_FOODS_REQUEST'
    }
};

const foodsError = (error) => {
    return {
        type: 'FETCH_FOODS_FAILURE',
        payload: error
    };
};

export const foodAddedToCart = (foodId) => {
    return {
        type: 'FOOD_ADDED_TO_CART',
        payload: foodId
    };
};

export const foodRemovedFromCart = (foodId) => {
    return {
        type: 'FOOD_REMOVED_FROM_CART',
        payload: foodId
    };
};

export const allFoodsRemovedFromCart = (foodId) => {
    return {
        type: 'ALL_FOODS_REMOVED_FROM_CART',
        payload: foodId
    };
};

const fetchFoods = (foodstoreService) => () => (dispatch) => {
    dispatch(foodsRequested());
    foodstoreService.getFoods()
        .then((data) => dispatch(foodsLoaded(data)))
        .catch((err) => dispatch(foodsError(err)));
};

export {
    fetchFoods
};