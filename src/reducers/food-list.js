const updateFoodList = (state, action) => {

    if (state === undefined) {
        return {
            foods: [],
            loading: true,
            error: null
        }
    }

    switch (action.type) {
        case 'FETCH_FOODS_REQUEST':
            return {
                foods: [],
                loading: true,
                error: null
            };
        case 'FETCH_FOODS_SUCCESS':
            return {
                foods: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_FOODS_FAILURE':
            return {
                foods: [],
                loading: false,
                error: action.payload
            };

        default:
            return state.foodList;
    }
};

export default updateFoodList;