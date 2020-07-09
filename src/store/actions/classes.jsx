import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import history from "../../history";

export const fetchClasses = (query) => async (dispatch) => {
  const response = await HttpService.get(API_NAME.CLASSES, {
    params: query,
  });
  dispatch({
    type: ActionType.SHOW_CLASSES,
    payload: response.data.classes,
  });
};
export const addClasses = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.CLASSES, formValues);
  dispatch({
    type: ActionType.ADD_CLASSES,
    payload: response,
  });
};
