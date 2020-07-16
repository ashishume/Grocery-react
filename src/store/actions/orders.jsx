import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import history from "../../history";
import SendMail from "../../Shared/SendMail";
export const addOrders = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.ORDERS, formValues);
  dispatch({
    type: ActionType.ADD_ORDERS,
    payload: response.data,
  });

  if (response.status === 200) {
    const mailBody = JSON.parse(localStorage.getItem("mailData"));
    await SendMail(mailBody);
    await localStorage.removeItem("pendingOrder");
    await localStorage.removeItem("cartItems");
    await localStorage.removeItem("mailData");
    await history.push("/my-orders");
  }
};

export const showAllOrders = () => async (dispatch) => {
  const response = await HttpService.get(API_NAME.ORDERS);

  dispatch({
    type: ActionType.SHOW_ALL_ORDERS,
    payload: response.data,
  });
};

export const showOrderByCustomerId = (id) => async (dispatch) => {
  const response = await HttpService.get(`${API_NAME.ORDERS}users/${id}`);

  dispatch({
    type: ActionType.SHOW_ORDERS_BY_CUSTOMER_ID,
    payload: response.data,
  });
};

export const updateOrder = (body) => async (dispatch) => {
  const response = await HttpService.put(
    `${API_NAME.ORDERS}updateOrderStatus`,
    body
  );

  dispatch({
    type: ActionType.UPDATE_ORDER_STATUS,
    payload: response.data,
  });
};
