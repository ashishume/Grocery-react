import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  subjects: [],
  subjectsReponse: [],
};

const subjectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_SUBJECTS:
      return {
        ...state,
        subjects: action.payload,
      };
    case ActionTypes.ADD_SUBJECT_LECTURES:
      return {
        ...state,
        subjectsReponse: action.payload,
      };
    default:
      return state;
  }
};

export default subjectsReducer;
