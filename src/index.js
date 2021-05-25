import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./store/Reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore(RootReducer, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
