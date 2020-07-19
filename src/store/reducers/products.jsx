import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  categoryProducts: [],
  productsResponse:[],
  productsById:[]
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        productsResponse: action.payload,
      };
    case ActionTypes.SHOW_LATEST_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ActionTypes.SHOW_PRODUCTS_BY_CATEGORY_ID:
      return {
        ...state,
        categoryProducts: action.payload,
      };
    case ActionTypes.SHOW_PRODUCTS_BY_PRODUCT_ID:
      return {
        ...state,
        productsById: action.payload,
      };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        productsResponse: action.payload,
      };
    case ActionTypes.UPDATE_PRODUCT:
      return {
        ...state,
        productsResponse: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
