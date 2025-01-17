import { createStore, applyMiddleware } from "redux";
import moviesReducer from "../reducer/movieReducer";
import thunk from "redux-thunk";

const store = createStore(moviesReducer, applyMiddleware(thunk));

export default store;
