import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
export const addImages = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.IMAGES, formValues);
  dispatch({
    type: ActionType.ADD_IMAGES,
    payload: response.data,
  });
};

export const showAllImages = () => async (dispatch) => {
  const response = await HttpService.get(API_NAME.IMAGES);

  dispatch({
    type: ActionType.SHOW_IMAGES,
    payload: response.data,
  });
};

export const updateImage = (formValues) => async (dispatch) => {
  const response = await HttpService.put(API_NAME.IMAGES, formValues);

  dispatch({
    type: ActionType.UPDATE_IMAGES,
    payload: response.data,
  });
};
