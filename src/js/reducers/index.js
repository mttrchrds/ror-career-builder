import { combineReducers } from "redux";
import ReducerCareers from "./reducerCareers";

const rootReducer = combineReducers({
  careers: ReducerCareers
});

export default rootReducer;