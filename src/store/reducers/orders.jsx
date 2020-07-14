import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  ordersResponse: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_ORDERS:
      return {
        ...state,
        ordersResponse: action.payload,
      };
    case ActionTypes.SHOW_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case ActionTypes.UPDATE_ORDER_STATUS:
      return {
        ...state,
        ordersResponse: action.payload,
      };
    case ActionTypes.SHOW_ORDERS_BY_CUSTOMER_ID:
      return {
        ...state,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default ordersReducer;
