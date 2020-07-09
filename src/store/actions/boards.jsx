import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import history from "../../history";

export const fetchBoards = () => async (dispatch) => {
  const response = await HttpService.get(API_NAME.BOARDS);

  dispatch({
    type: ActionType.SHOW_BOARDS,
    payload: response.data.board,
  });
};
export const addBoard = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.BOARDS, formValues);

  dispatch({
    type: ActionType.ADD_BOARDS,
    payload: response,
  });
};
