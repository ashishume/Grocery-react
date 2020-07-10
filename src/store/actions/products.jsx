import * as ActionType from "./actionTypes";
import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";

export const addProducts = (formValues) => async (dispatch) => {
  const response = await HttpService.post(API_NAME.PRODUCT, formValues);

  dispatch({
    type: ActionType.ADD_PRODUCT,
    payload: response.data,
  });

};
export const showAllProducts = () => async (dispatch) => {
  const response = await HttpService.get(API_NAME.PRODUCT);

  dispatch({
    type: ActionType.SHOW_PRODUCTS,
    payload: response.data,
  });
};
export const showProductsByCategoryId = (params) => async (dispatch) => {
  const response = await HttpService.get(API_NAME.PRODUCT + "/" + params);

  dispatch({
    type: ActionType.SHOW_PRODUCTS_BY_CATEGORY_ID,
    payload: response.data,
  });
  
};
export const showProductsById = (params) => async (dispatch) => {
  const response = await HttpService.get(
    API_NAME.PRODUCT + "/oneProduct" + params
  );

  dispatch({
    type: ActionType.SHOW_PRODUCTS_BY_PRODUCT_ID,
    payload: response.data,
  });
};
