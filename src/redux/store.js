import { applyMiddleware, createStore } from "redux";
// Logger with default options
import logger from "redux-logger";
import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
