import * as types from "../actions/types";

const intialState = {
  ingredients: {
    cucumber: { quantity: 1, price: 3.5, label: "Cucumber" },
    tomato: { quantity: 1, price: 4.5, label: "Tomato" },
    frenchFries: { quantity: 1, price: 11.5, label: "French-fries" },
    cheese: { quantity: 1, price: 8.4, label: "Cheese" },
    salad: { quantity: 1, price: 6.5, label: "Salad" },
    meat: { quantity: 1, price: 9.5, label: "Meat" },
    onion: { quantity: 1, price: 3, label: "Onion" },
    ketchup: { quantity: 1, price: 3.5, label: "Ketchup" },
  },
  price: 10,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity + 1,
          },
        },
        price: state.price + state.ingredients[action.ingredient].price,
      };

    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity - 1,
          },
        },
        price: state.price - state.ingredients[action.ingredient].price,
      };

    default:
      return state;
  }
  return state;
};
