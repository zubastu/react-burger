import { TRefreshToken } from "../../types";

export const REFRESH_TOKEN_START: "REFRESH_TOKEN_START" = "REFRESH_TOKEN_START";
export const REFRESH_TOKEN_SUCCESS: "REFRESH_TOKEN_SUCCESS" =
  "REFRESH_TOKEN_SUCCESS";
export const REFRESH_TOKEN_ERROR: "REFRESH_TOKEN_ERROR" = "REFRESH_TOKEN_ERROR";

export interface IRefreshTokenStart {
  readonly type: typeof REFRESH_TOKEN_START;
}
export interface IRefreshTokenSuccess {
  readonly type: typeof REFRESH_TOKEN_SUCCESS;
  readonly payload: TRefreshToken;
}
export interface IRefreshTokenError {
  readonly type: typeof REFRESH_TOKEN_ERROR;
}

export type TRefreshTokenActions =
  | IRefreshTokenError
  | IRefreshTokenStart
  | IRefreshTokenSuccess;
