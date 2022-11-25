import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { registrationReducer } from "./register";
import { loginReducer } from "./login";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  register: registrationReducer,
  login: loginReducer,
});
