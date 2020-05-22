import * as actions from "./actions";

const intialState = {
  ingredients: null,
  price: 100,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      console.log("ingredient added");
      return state;

    case actions.REMOVE_INGREDIENT:
      console.log("ingredient removed");
      return state;

    default:
      return state;
  }
  return state;
};
