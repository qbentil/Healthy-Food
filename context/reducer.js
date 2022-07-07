export const actionTypes = {
    SET_USER: 'SET_USER',
    SET_FOOD_ITEMS: 'SET_FOOD_ITEMS',
    ADD_TO_CART: 'ADD_TO_CART',
}

const reducer = (state, action) => {

    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.SET_FOOD_ITEMS:
            return {
                ...state,
                foodItems: action.foodItems,
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.item],
            }
            default:
                return state;
    }
}

export default reducer;