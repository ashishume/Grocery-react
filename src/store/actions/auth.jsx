import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import { reset } from "redux-form";

export const signUp = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.AUTH, formValues);

  dispatch({
    type: ActionType.SIGN_UP,
    payload: response.data,
  });
};

export const signIn = () => async (dispatch) => {
  const response = await HttpService.get(`${API_NAME.AUTH}/login`);

  dispatch({
    type: ActionType.SIGN_IN,
    payload: response.data,
  });
};

export const signOut = () => async (dispatch) => {
//   const response = await HttpService.post(API_NAME.AUTH);

  dispatch({
    type: ActionType.SIGN_OUT,
    payload: response.data,
  });
};
