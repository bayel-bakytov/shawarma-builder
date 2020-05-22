import * as actions from "./actions";

const intialState = {
  ingredients: null,
  price: 100,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return state;

    case actions.REMOVE_INGREDIENT:
      return state;

    default:
      return state;
  }
  return state;
};
