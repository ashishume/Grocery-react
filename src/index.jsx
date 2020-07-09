import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import history from "./history";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";


const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
