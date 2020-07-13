import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
export const addOrders = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.ORDERS, formValues);
  dispatch({
    type: ActionType.ADD_ORDERS,
    payload: response.data,
  });
};

export const showAllOrders = () => async (dispatch) => {
  const response = await HttpService.get(API_NAME.ORDERS);

  dispatch({
    type: ActionType.SHOW_ALL_ORDERS,
    payload: response.data,
  });
};

export const showOrderByCustomerId = (id) => async (dispatch) => {
  const response = await HttpService.get(`${API_NAME.ORDERS}/users/${id}`);

  dispatch({
    type: ActionType.SHOW_ORDERS_BY_CUSTOMER_ID,
    payload: response.data,
  });
};
