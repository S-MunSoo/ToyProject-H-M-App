// 여러 reducers 합치기 combineReducers
import { combineReducers } from "redux";
import authenticateReducer from "./autheticateReduecer";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authenticateReducer,
  product: productReducer,
});
