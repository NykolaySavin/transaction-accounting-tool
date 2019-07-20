import React from "react";
import ReactDOM from "react-dom";
import "./scss/styles.scss";
import { Provider } from "react-redux";

import App from "./js/components/index/App.container";
import store from "./js/redux/store";
Number.prototype.round = function(places) {
  return +(Math.round(this + "e+" + places) + "e-" + places);
};
require("es6-promise").polyfill();
require("isomorphic-fetch");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
