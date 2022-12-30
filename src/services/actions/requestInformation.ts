export const SHOW_REQUEST_INFO: "SHOW_REQUEST_INFO" = "SHOW_REQUEST_INFO";
export const SHOW_REQUEST_ERROR_INFO: "SHOW_REQUEST_ERROR_INFO" =
  "SHOW_REQUEST_ERROR_INFO";
export const CLOSE_REQUEST_INFO: "CLOSE_REQUEST_INFO" = "CLOSE_REQUEST_INFO";

export interface IShowRequestInfo {
  readonly type: typeof SHOW_REQUEST_INFO;
  readonly payload: string;
}
export interface ICloseRequestInfo {
  readonly type: typeof CLOSE_REQUEST_INFO;
}
export interface IShowRequestErrorInfo {
  readonly type: typeof SHOW_REQUEST_ERROR_INFO;
  readonly payload: string;
}

export type TRequestInformation =
  | ICloseRequestInfo
  | IShowRequestInfo
  | IShowRequestErrorInfo;
