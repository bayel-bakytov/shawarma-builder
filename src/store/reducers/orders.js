import * as types from "../actions/types";

const intialState = {
  orders: null,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case types.SET_ORDERS:
      return {
        ...state,
        orders: action.orders,
      };

    default:
      return state;
  }
};
