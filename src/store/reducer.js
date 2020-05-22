import * as actions from "./actions";

const intialState = {
  ingredients: {
    cucumber: 1,
    tomato: 1,
    frenchFries: 1,
    cheese: 1,
    salad: 1,
    meat: 1,
    onion: 1,
    ketchup: 1,
  },
  price: 100,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
      };

    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
      };

    default:
      return state;
  }
  return state;
};
