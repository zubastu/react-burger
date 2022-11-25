import { START_LOGIN, ERROR_LOGIN, SUCCESS_LOGIN } from "../actions/login";
import { setCookie } from "../../utils/cookie";

const initialState = {
  isRequest: false,
  isError: false,
  isLogged: false,
  user: {},
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
      setCookie("accessToken", action.payload.accessToken, { expires: 1200 });
      return {
        ...state,
        isRequest: false,
        isError: false,
        isLogged: true,
        user: action.payload.user,
      };
    case ERROR_LOGIN:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    default:
      return state;
  }
};
