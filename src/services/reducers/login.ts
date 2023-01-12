import {
  START_LOGIN,
  ERROR_LOGIN,
  SUCCESS_LOGIN,
  LOGOUT,
  LOGIN_CHECKED,
  TLoginActions,
} from "../actions/login";
import { setCookie } from "../../utils/cookie";

type TLoginReducer = {
  isRequest: boolean;
  isError: boolean;
  isLogged: boolean;
};

const initialState: TLoginReducer = {
  isRequest: false,
  isError: false,
  isLogged: false,
};

export const loginReducer = (
  state = initialState,
  action: TLoginActions
): TLoginReducer => {
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
