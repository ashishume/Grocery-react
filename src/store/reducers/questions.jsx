import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  questions: [],
  questionsResponse: [],
};

const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
      };
    case ActionTypes.ADD_QUESTIONS:
      return {
        ...state,
        questionsResponse: action.payload,
      };
    case ActionTypes.DELETE_QUESTION:
      return {
        ...state,
        questionsResponse: action.payload,
      };
    default:
      return state;
  }
};

export default questionsReducer;
