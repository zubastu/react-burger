import { TUser } from "../../types";

export const GET_USER_INFO_START: "GET_USER_INFO_START" = "GET_USER_INFO_START";
export const GET_USER_INFO_SUCCESS: "GET_USER_INFO_SUCCESS" =
  "GET_USER_INFO_SUCCESS";
export const GET_USER_INFO_ERROR: "GET_USER_INFO_ERROR" = "GET_USER_INFO_ERROR";
export const RESET_USER_INFO: "RESET_USER_INFO" = "RESET_USER_INFO";

export interface IGetUserInfoStart {
  readonly type: typeof GET_USER_INFO_START;
}
export interface IGetUserInfoSuccess {
  readonly type: typeof GET_USER_INFO_SUCCESS;
  readonly payload: TUser;
}
export interface IGetUserInfoError {
  readonly type: typeof GET_USER_INFO_ERROR;
}
export interface IResetUserInfo {
  readonly type: typeof RESET_USER_INFO;
}

export type TUserActions =
  | IGetUserInfoStart
  | IGetUserInfoError
  | IGetUserInfoSuccess
  | IResetUserInfo;
