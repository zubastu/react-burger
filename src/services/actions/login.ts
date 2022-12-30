import { TLogin } from "../../types";

export const SUCCESS_LOGIN: "SUCCESS_LOGIN" = "SUCCESS_LOGIN";
export const ERROR_LOGIN: "ERROR_LOGIN" = "ERROR_LOGIN";
export const START_LOGIN: "START_LOGIN" = "START_LOGIN";
export const LOGOUT: "LOGOUT" = "LOGOUT";
export const LOGIN_CHECKED: "LOGIN_CHECKED" = "LOGIN_CHECKED";

export interface ISuccessLogin {
  readonly type: typeof SUCCESS_LOGIN;
  readonly payload: TLogin;
}
export interface IErrorLogin {
  readonly type: typeof ERROR_LOGIN;
}
export interface IStartLogin {
  readonly type: typeof START_LOGIN;
}
export interface ILogout {
  readonly type: typeof LOGOUT;
}
export interface ILoginChecked {
  readonly type: typeof LOGIN_CHECKED;
}

export type TLoginActions =
  | IStartLogin
  | IErrorLogin
  | ILogout
  | ILoginChecked
  | ISuccessLogin;
