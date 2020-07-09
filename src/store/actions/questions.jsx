import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import history from "../../history";

export const fetchQuestions = (body) => async (dispatch) => {
  const response = await HttpService.post(`${API_NAME.QUESTIONS}/all`, body);
  dispatch({
    type: ActionType.SHOW_QUESTIONS,
    payload: response.data,
  });
};
export const addQuestions = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.QUESTIONS, formValues);
  dispatch({
    type: ActionType.ADD_QUESTIONS,
    payload: response,
  });
};
export const deleteQuestions = (formValues) => async (dispatch) => {
  const response = await HttpService.put(
    API_NAME.QUESTIONS + "/delete",
    formValues
  );
  dispatch({
    type: ActionType.DELETE_QUESTION,
    payload: response,
  });

  console.log(response);
  
};
