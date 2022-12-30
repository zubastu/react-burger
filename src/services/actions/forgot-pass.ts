export const SUCCESS_FORGOT_PASS: "SUCCESS_FORGOT_PASS" = "SUCCESS_FORGOT_PASS";
export const ERROR_FORGOT_PASS: "ERROR_FORGOT_PASS" = "ERROR_FORGOT_PASS";
export const START_FORGOT_PASS: "START_FORGOT_PASS" = "START_FORGOT_PASS";

export interface ISuccessForgotPass {
  readonly type: typeof SUCCESS_FORGOT_PASS;
}

export interface IStartForgotPass {
  readonly type: typeof START_FORGOT_PASS;
}

export interface IErrorForgotPass {
  readonly type: typeof ERROR_FORGOT_PASS;
}

export type TForgotPass =
  | ISuccessForgotPass
  | IStartForgotPass
  | IErrorForgotPass;
