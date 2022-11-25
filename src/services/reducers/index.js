import { combineReducers } from "redux";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { registrationReducer } from "./register";
import { loginReducer } from "./login";
import { forgetPasswordReducer } from "./forgot-pass";
import { restorePasswordReducer } from "./restore-pass";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  register: registrationReducer,
  login: loginReducer,
  forgetPassword: forgetPasswordReducer,
  resetPassword: restorePasswordReducer,
});
