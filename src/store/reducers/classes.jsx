import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  classes: [],
  classResponse: [],
};

const classesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_CLASSES:
      return {
        ...state,
        classes: action.payload,
      };
    case ActionTypes.ADD_CLASSES:
      return {
        ...state,
        classResponse: action.payload,
      };
    default:
      return state;
  }
};

export default classesReducer;
