import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

//REDUCERS
import loaderReducer from "./reducers/loader";
// import boardsReducer from "./reducers/boards";
// import classesReducer from "./reducers/classes";
// import subjectsReducer from "./reducers/subjects";
// import questionsReducer from "./reducers/questions";

const rootReducer = combineReducers({
  loader: loaderReducer,
  // boards: boardsReducer,
  // classes: classesReducer,
  // subjects: subjectsReducer,
  // questions: questionsReducer,
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
