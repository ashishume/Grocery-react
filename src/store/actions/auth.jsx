import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";

export const signUpUser = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.AUTH, formValues);

  dispatch({
    type: ActionType.SIGN_UP,
    payload: response.data,
  });

  const type = Math.floor(Math.random(0, 1000000) * 1000000000);
  if (response.status == 200) {
    localStorage.setItem("name", response.data.name);
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("type", `${type}${response.data.type}`);
    localStorage.setItem("userId", response.data.userId);
  }
};

export const signIn = (value) => async (dispatch) => {
  const response = await HttpService.post(`${API_NAME.AUTH}/login`, value);

  dispatch({
    type: ActionType.SIGN_IN,
    payload: response.data,
  });

  if (response.status === 200) {
    const type = Math.floor(Math.random(0, 1000000) * 1000000000);
    localStorage.setItem("email", response.data.email);
    localStorage.setItem("type", `${type}${response.data.type}`);
    localStorage.setItem("name", response.data.name);
    localStorage.setItem("userId", response.data.userId);
  }
};

export const signOut = () => async (dispatch) => {
  const response = await HttpService.post(API_NAME.AUTH);

  dispatch({
    type: ActionType.SIGN_OUT,
    payload: response.data,
  });
};
