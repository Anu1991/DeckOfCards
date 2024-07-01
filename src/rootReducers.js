import { combineReducers } from "redux";
import cardReducer from "./data/reducers/card-reducers";

const rootReducers = combineReducers({
  card: cardReducer,
});

export default rootReducers;
