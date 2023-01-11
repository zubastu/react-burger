import { TCurrentOrderResponse, TOrderResponse } from "../../types";

export const START_ORDER_POST: "START_ORDER_POST" = "START_ORDER_POST";
export const ERROR_ORDER_POST: "ERROR_ORDER_POST" = "ERROR_ORDER_POST";
export const SUCCESS_ORDER_POST: "SUCCESS_ORDER_POST" = "SUCCESS_ORDER_POST";
export const CLOSE_ORDER_MODAL: "CLOSE_ORDER_MODAL" = "CLOSE_ORDER_MODAL";

export const GET_ORDER_START: "GET_ORDER_START" = "GET_ORDER_START";
export const GET_ORDER_SUCCESS: "GET_ORDER_SUCCESS" = "GET_ORDER_SUCCESS";
export const GET_ORDER_ERROR: "GET_ORDER_ERROR" = "GET_ORDER_ERROR";

export interface IStartOrderPost {
  readonly type: typeof START_ORDER_POST;
}
export interface IErrorOrderPost {
  readonly type: typeof ERROR_ORDER_POST;
}
export interface ISuccessOrderPost {
  readonly type: typeof SUCCESS_ORDER_POST;
  readonly payload: TOrderResponse;
}
export interface ICloseOrderModal {
  readonly type: typeof CLOSE_ORDER_MODAL;
}
export interface IStartGetOrder {
  readonly type: typeof GET_ORDER_START;
}
export interface ISuccessGetOrder {
  readonly type: typeof GET_ORDER_SUCCESS;
  payload: TCurrentOrderResponse;
}
export interface IErrorGetOrder {
  readonly type: typeof GET_ORDER_ERROR;
}

export type TOrderActions =
  | IStartOrderPost
  | IErrorOrderPost
  | ISuccessOrderPost
  | ICloseOrderModal
  | IStartGetOrder
  | ISuccessGetOrder
  | IErrorGetOrder;
