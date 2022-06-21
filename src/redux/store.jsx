import ProductReducer from "./reducers/productReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let store = createStore(ProductReducer, applyMiddleware(thunk));

export default store;
