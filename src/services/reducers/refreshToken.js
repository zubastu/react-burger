import {
  REFRESH_TOKEN_START,
  REFRESH_TOKEN_ERROR,
  REFRESH_TOKEN_SUCCESS,
} from "../actions/refreshToken";
import { setCookie } from "../../utils/cookie";

const initialState = {
  isRequest: false,
  isError: false,
};

export const refreshTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case REFRESH_TOKEN_START:
      return {
        ...state,
        isRequest: true,
        isError: false,
      };
    case REFRESH_TOKEN_ERROR:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    case REFRESH_TOKEN_SUCCESS:
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
      };
    default:
      return state;
  }
};
