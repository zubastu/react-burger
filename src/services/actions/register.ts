export const SUCCESS_REGISTRATION: "SUCCESS_REGISTRATION" =
  "SUCCESS_REGISTRATION";
export const ERROR_REGISTRATION: "ERROR_REGISTRATION" = "ERROR_REGISTRATION";
export const START_REGISTRATION: "START_REGISTRATION" = "START_REGISTRATION";
export const RESET_REGISTRATION: "RESET_REGISTRATION" = "RESET_REGISTRATION";

export interface ISuccessRegistration {
  readonly type: typeof SUCCESS_REGISTRATION;
}
export interface IErrorRegistration {
  readonly type: typeof ERROR_REGISTRATION;
}
export interface IStartRegistration {
  readonly type: typeof START_REGISTRATION;
}
export interface IResetRegistration {
  readonly type: typeof RESET_REGISTRATION;
}

export type TRegisterActions =
  | IStartRegistration
  | ISuccessRegistration
  | IErrorRegistration
  | IResetRegistration;
