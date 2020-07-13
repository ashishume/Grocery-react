import HttpService from "../../API/HttpService";
import { API_NAME } from "../../API/ApiPaths";
// export const makePayment = async (formValues) => {
//   const response = await HttpService.post(API_NAME.PAYMENTS, formValues);
// };

export const showPaymentData = async (id) => {
  const response = await HttpService.get(`${API_NAME.PAYMENTS}/${id}`);
  console.log(response);
};
