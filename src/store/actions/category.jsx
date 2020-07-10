import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";

export const addCategory = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.CATEGORY, formValues);

  dispatch({
    type: ActionType.ADD_CATEGORY,
    payload: response.data,
  });

};
export const showCategory = () => async (dispatch) => {
  const response = await HttpService.get(API_NAME.CATEGORY);

  dispatch({
    type: ActionType.SHOW_CATEGORY,
    payload: response.data,
  });
};
export const archiveCategory = (id) => async (dispatch) => {
  const response = await HttpService.delete(API_NAME.CATEGORY + "/" + id);

  dispatch({
    type: ActionType.DELETE_CATEGORY,
    payload: response.data,
  });
  
};
