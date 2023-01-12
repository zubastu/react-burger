import { TWSData } from "../../types";

export const WS_USER_HISTORY_INIT = "WS_USER_HISTORY_INIT";
export const WS_USER_HISTORY_CONNECTION_ERROR =
  "WS_USER_HISTORY_CONNECTION_ERROR";
export const WS_USER_HISTORY_CONNECTION_CLOSE =
  "WS_USER_HISTORY_CONNECTION_CLOSE";
export const WS_GET_USER_HISTORY_ORDERS = "WS_GET_USER_HISTORY_ORDERS";

export interface IWSUserHistoryConnectionSuccess {
  readonly type: typeof WS_USER_HISTORY_INIT;
}

export interface IWSUserHistoryConnectionError {
  readonly type: typeof WS_USER_HISTORY_CONNECTION_ERROR;
}

export interface IWSUserHistoryConnectionClosed {
  readonly type: typeof WS_USER_HISTORY_CONNECTION_CLOSE;
}

export interface IWSGetUserHistoryOrders {
  readonly type: typeof WS_GET_USER_HISTORY_ORDERS;
  payload: TWSData;
}

export type TWSUserHistoryActions =
  | IWSUserHistoryConnectionSuccess
  | IWSUserHistoryConnectionError
  | IWSUserHistoryConnectionClosed
  | IWSGetUserHistoryOrders;

export const WSActionsOrdersUserHistory = {
  wsInit: WS_USER_HISTORY_INIT,
  disconnect: WS_USER_HISTORY_CONNECTION_CLOSE,
  onError: WS_USER_HISTORY_CONNECTION_ERROR,
  onMessage: WS_GET_USER_HISTORY_ORDERS,
};
