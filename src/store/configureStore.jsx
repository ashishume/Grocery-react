import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

//REDUCERS
import loaderReducer from "./reducers/loader";
import productsReducer from "./reducers/products";
import categoryReducer from "./reducers/category";
import imagesReducer from "./reducers/images";
import authReducer from "./reducers/auth";
import ordersReducer from "./reducers/orders";

const rootReducer = combineReducers({
  loader: loaderReducer,
  products: productsReducer,
  category: categoryReducer,
  images: imagesReducer,
  orders: ordersReducer,
  auth: authReducer,
  form: formReducer,
});

const middleWares = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

const configureStore = () => {
  return store;
};

export default configureStore;
