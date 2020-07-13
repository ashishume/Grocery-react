import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  auth: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        auth: action.payload,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
