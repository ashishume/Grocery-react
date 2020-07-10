import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

//REDUCERS
import loaderReducer from "./reducers/loader";
import productsReducer from "./reducers/products";
import categoryReducer from "./reducers/category";

const rootReducer = combineReducers({
  loader: loaderReducer,
  products: productsReducer,
  category: categoryReducer,
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
