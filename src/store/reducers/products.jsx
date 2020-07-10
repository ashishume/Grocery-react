import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  productsResponse:[]
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        productsResponse: action.payload,
      };
    case ActionTypes.SHOW_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ActionTypes.SHOW_PRODUCTS_BY_CATEGORY_ID:
      return {
        ...state,
        products: action.payload,
      };
    case ActionTypes.SHOW_PRODUCTS_BY_PRODUCT_ID:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
