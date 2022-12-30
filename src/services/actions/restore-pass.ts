export const SUCCESS_RESTORE_PASS: "SUCCESS_RESTORE_PASS" =
  "SUCCESS_RESTORE_PASS";
export const ERROR_RESTORE_PASS: "ERROR_RESTORE_PASS" = "ERROR_RESTORE_PASS";
export const START_RESTORE_PASS: "START_RESTORE_PASS" = "START_RESTORE_PASS";
export const RESET_REQUEST_ACCEPT: "RESET_REQUEST_ACCEPT" =
  "RESET_REQUEST_ACCEPT";

export interface ISuccessRestorePass {
  readonly type: typeof SUCCESS_RESTORE_PASS;
}
export interface IErrorRestorePass {
  readonly type: typeof ERROR_RESTORE_PASS;
}
export interface IStartRestorePass {
  readonly type: typeof START_RESTORE_PASS;
}
export interface IResetRestorePass {
  readonly type: typeof RESET_REQUEST_ACCEPT;
}

export type TRestorePasswordActions =
  | IStartRestorePass
  | IErrorRestorePass
  | IResetRestorePass
  | ISuccessRestorePass;
