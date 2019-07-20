import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import { state, test } from "./state/app.state";
import { reducer as formReducer } from "redux-form";
import initializeStore from "./state/initializeStore";
import rootSaga from "./saga/index";

const sagaMiddleware = createSagaMiddleware();
const combinedReducer = (state, action) => ({
  ...rootReducer(state, action),
  form: formReducer(state.form, action)
});
const store = createStore(
  combinedReducer,
  {
    ...(process.env.NODE_ENV === "test" ? test : state)
  },
  applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(rootSaga);
initializeStore(store);

export default store;
