import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
import { reset } from "redux-form";
export const addProducts = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.PRODUCT, formValues);

  dispatch({
    type: ActionType.ADD_PRODUCT,
    payload: response.data,
  });
  if (response.status === 200) dispatch(reset("ProductForm"));
};
export const showAllLatestProducts = () => async (dispatch) => {
  const response = await HttpService.get(`${API_NAME.PRODUCT}latest`);

  dispatch({
    type: ActionType.SHOW_LATEST_PRODUCTS,
    payload: response.data,
  });
};
export const showProductsByCategoryId = (params) => async (dispatch) => {
  const response = await HttpService.get(API_NAME.PRODUCT + params);

  dispatch({
    type: ActionType.SHOW_PRODUCTS_BY_CATEGORY_ID,
    payload: response.data,
  });
};
export const showProductsById = (params) => async (dispatch) => {
  const response = await HttpService.get(
    API_NAME.PRODUCT + "oneProduct/" + params
  );

  dispatch({
    type: ActionType.SHOW_PRODUCTS_BY_PRODUCT_ID,
    payload: response.data,
  });
};
export const updateProduct = (params, formValues) => async (dispatch) => {
  const response = await HttpService.put(API_NAME.PRODUCT + params, formValues);

  dispatch({
    type: ActionType.UPDATE_PRODUCT,
    payload: response.data,
  });
};
