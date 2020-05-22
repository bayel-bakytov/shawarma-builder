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

const PRICES = {
  cucumber: 3.5,
  tomato: 4.5,
  frenchFries: 11.5,
  cheese: 8.4,
  salad: 6.5,
  meat: 9.5,
  onion: 3,
  ketchup: 1,
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
        price: state.price + PRICES[action.ingredient],
      };

    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        price: state.price - PRICES[action.ingredient],
      };

    default:
      return state;
  }
  return state;
};
