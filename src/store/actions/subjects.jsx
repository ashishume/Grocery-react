import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import history from "../../history";

export const fetchSubjects = (formValues) => async (dispatch) => {
  const response = await HttpService.post(
    `${API_NAME.SUBJECTS}/all`,
    formValues
  );
  dispatch({
    type: ActionType.SHOW_SUBJECTS,
    payload: response.data,
  });
};
export const addSubjectsLectures = (formValues) => async (dispatch) => {
  const response = await HttpService.post(
    `${API_NAME.SUBJECTS}`,
    formValues
  );
  dispatch({
    type: ActionType.ADD_SUBJECT_LECTURES,
    payload: response,
  });
};
