import * as ActionTypes from "../actions/actionTypes";

const initialState = {
  images: [],
  imageResponse: [],
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_IMAGES:
      return {
        ...state,
        imageResponse: action.payload,
      };
    case ActionTypes.SHOW_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case ActionTypes.UPDATE_IMAGES:
      return {
        ...state,
        imageResponse: action.payload,
      };
    default:
      return state;
  }
};

export default imagesReducer;
