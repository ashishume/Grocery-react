import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  category: [],
  categoryResponse: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CATEGORY:
      return {
        ...state,
        categoryResponse: action.payload,
      };
    case ActionTypes.SHOW_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case ActionTypes.UPDATE_CATEGORY:
      return {
        ...state,
        categoryResponse: action.payload,
      };
    case ActionTypes.DELETE_CATEGORY:
      return {
        ...state,
        categoryResponse: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
