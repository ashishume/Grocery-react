import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  auth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return {
        ...state,
        auth: true,
      };
    case ActionTypes.SIGN_OUT:
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};

export default authReducer;
