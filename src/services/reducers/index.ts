import { Action, ActionCreator, combineReducers, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ingredientsReducer } from "./ingredients";
import { orderReducer } from "./order";
import { registrationReducer } from "./register";
import { loginReducer } from "./login";
import { forgetPasswordReducer } from "./forgot-pass";
import { restorePasswordReducer } from "./restore-pass";
import { refreshTokenReducer } from "./refreshToken";
import { userInfoReducer } from "./user";
import { requestInformationReducer } from "./requestInformation";
import { preloaderReducer } from "./preloader";
import { TApplicationActions, TStore } from "../../types";
import { ordersReducer } from "./ordersReducer";
import { mobileModalReducer } from "./mobileModal";

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  order: orderReducer,
  register: registrationReducer,
  login: loginReducer,
  forgetPassword: forgetPasswordReducer,
  resetPassword: restorePasswordReducer,
  token: refreshTokenReducer,
  user: userInfoReducer,
  request: requestInformationReducer,
  preloader: preloaderReducer,
  orders: ordersReducer,
  mobileModal: mobileModalReducer,
});

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, TStore, TApplicationActions>
>;

export type AppDispatch = Dispatch<TApplicationActions>;
