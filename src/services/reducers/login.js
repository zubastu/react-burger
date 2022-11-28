import {
  START_LOGIN,
  ERROR_LOGIN,
  SUCCESS_LOGIN,
  LOGOUT,
  LOGIN_CHECKED,
} from "../actions/login";
import { setCookie } from "../../utils/cookie";

const initialState = {
  isRequest: false,
  isError: false,
  isLogged: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        isRequest: true,
        isError: false,
      };
    case SUCCESS_LOGIN:
      setCookie("refreshToken", action.payload.refreshToken, {
        expires: 99999 * 999,
      });
      setCookie("accessToken", action.payload.accessToken, {
        expires: 1200,
      });
      return {
        ...state,
        isRequest: false,
        isError: false,
        isLogged: true,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    case LOGOUT:
      return {
        ...state,
        isRequest: false,
        isError: false,
        isLogged: false,
      };
    case LOGIN_CHECKED:
      return {
        ...state,
        isLogged: true,
      };
    default:
      return state;
  }
};
