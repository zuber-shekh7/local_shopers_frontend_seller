import { combineReducers } from "redux";

const initialState = {};

const rootReducer = combineReducers({
  helloWorld: () => {
    return "Hello world";
  },
});

export default rootReducer;
export { initialState };
