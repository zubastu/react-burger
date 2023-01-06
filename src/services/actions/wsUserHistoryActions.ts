import { TWSData } from "../../types";

export const WS_USER_HISTORY_CONNECTION_SUCCESS: "WS_USER_HISTORY_CONNECTION_SUCCESS" =
  "WS_USER_HISTORY_CONNECTION_SUCCESS";
export const WS_USER_HISTORY_CONNECTION_ERROR: "WS_CONNECTION_ERROR" =
  "WS_CONNECTION_ERROR";
export const WS_USER_HISTORY_CONNECTION_CLOSED: "WS_CONNECTION_CLOSED" =
  "WS_CONNECTION_CLOSED";
export const WS_GET_USER_HISTORY_ORDERS: "WS_GET_USER_ORDERS" =
  "WS_GET_USER_ORDERS";

export interface IWSUserHistoryConnectionSuccess {
  readonly type: typeof WS_USER_HISTORY_CONNECTION_SUCCESS;
}

export interface IWSUserHistoryConnectionError {
  readonly type: typeof WS_USER_HISTORY_CONNECTION_ERROR;
}

export interface IWSUserHistoryConnectionClosed {
  readonly type: typeof WS_USER_HISTORY_CONNECTION_CLOSED;
}

export interface IWSGetUserHistoryOrders {
  readonly type: typeof WS_GET_USER_HISTORY_ORDERS;
  payload: Array<TWSData>;
}

export type TWSUserHistoryActions =
  | IWSUserHistoryConnectionSuccess
  | IWSUserHistoryConnectionError
  | IWSUserHistoryConnectionClosed
  | IWSGetUserHistoryOrders;

export const WSActionsOrdersUserHistory = {
  wsInit: WS_USER_HISTORY_CONNECTION_SUCCESS,
  disconnect: WS_USER_HISTORY_CONNECTION_CLOSED,
  onError: WS_USER_HISTORY_CONNECTION_ERROR,
  onMessage: WS_GET_USER_HISTORY_ORDERS,
};
