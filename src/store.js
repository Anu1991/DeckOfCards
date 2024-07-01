import { createStore, applyMiddleware } from "redux";
import rootReducers from "./rootReducers";
import { composeWithDevTools } from "redux-devtools-extension";
//const store = () => createStore(rootReducers);

const store = () =>
  createStore(rootReducers, composeWithDevTools(applyMiddleware()));
//const store = createStore(rootReducers);

export default store;
