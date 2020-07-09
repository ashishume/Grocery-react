import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  boards: [],
  boardResponse:[]
};

const boardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_BOARDS:
      return {
        ...state,
        boards: action.payload,
      };
    case ActionTypes.ADD_BOARDS:
      return {
        ...state,
        boardResponse: action.payload,
      };
    default:
      return state;
  }
};

export default boardsReducer;
