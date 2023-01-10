import { TWSData } from "../../types";

export const WS_ORDERS_CONNECTION_SUCCESS = "WS_ORDERS_CONNECTION_SUCCESS";
export const WS_ORDERS_CONNECTION_ERROR = "WS_ORDERS_CONNECTION_ERROR";
export const WS_ORDERS_CONNECTION_CLOSED = "WS_ORDERS_CONNECTION_CLOSED";
export const WS_GET_ORDERS = "WS_GET_ORDERS";

export interface IWSConnectionSuccess {
  readonly type: typeof WS_ORDERS_CONNECTION_SUCCESS;
}

export interface IWSConnectionError {
  readonly type: typeof WS_ORDERS_CONNECTION_ERROR;
}

export interface IWSConnectionClosed {
  readonly type: typeof WS_ORDERS_CONNECTION_CLOSED;
}

export interface IWSGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  payload: TWSData;
}

export type TWSOrdersActions =
  | IWSConnectionSuccess
  | IWSConnectionError
  | IWSConnectionClosed
  | IWSGetOrders;

export const WSActionsOrdersAll = {
  wsInit: WS_ORDERS_CONNECTION_SUCCESS,
  disconnect: WS_ORDERS_CONNECTION_CLOSED,
  onError: WS_ORDERS_CONNECTION_ERROR,
  onMessage: WS_GET_ORDERS,
};
