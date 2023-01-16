import {
  GET_USER_INFO_START,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
  RESET_USER_INFO,
  TUserActions,
} from "../actions/user";
import { TUser } from "../../types";

export type TUserInfoReducer = {
  isRequest: boolean;
  isError: boolean;
  user: TUser;
};

export const initialState: TUserInfoReducer = {
  isRequest: false,
  isError: false,
  user: {
    name: "",
    email: "",
    password: "",
  },
};

export const userInfoReducer = (
  state = initialState,
  action: TUserActions
): TUserInfoReducer => {
  switch (action.type) {
    case GET_USER_INFO_START:
      return {
        ...state,
        isRequest: true,
        isError: false,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isError: false,
        user: action.payload,
      };
    case GET_USER_INFO_ERROR:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    case RESET_USER_INFO:
      return {
        ...state,
        user: { name: "", email: "", password: "" },
      };
    default:
      return state;
  }
};
