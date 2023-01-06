import type { Middleware, MiddlewareAPI } from "redux";
import type { AppDispatch } from "../reducers";
import type { TStore } from "../../types";
import { getCookie } from "../../utils/cookie";
import {
  WS_GET_USER_HISTORY_ORDERS,
  WS_USER_HISTORY_CONNECTION_CLOSED,
  WS_USER_HISTORY_CONNECTION_ERROR,
  WS_USER_HISTORY_CONNECTION_SUCCESS,
} from "../actions/wsUserHistoryActions";
import {
  WS_GET_ORDERS,
  WS_ORDERS_CONNECTION_CLOSED,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_CONNECTION_SUCCESS,
} from "../actions/wsOrdersActions";

type WSActions = {
  wsInit:
    | typeof WS_USER_HISTORY_CONNECTION_SUCCESS
    | typeof WS_ORDERS_CONNECTION_SUCCESS;
  onClose:
    | typeof WS_USER_HISTORY_CONNECTION_CLOSED
    | typeof WS_ORDERS_CONNECTION_CLOSED;
  onError:
    | typeof WS_USER_HISTORY_CONNECTION_ERROR
    | typeof WS_ORDERS_CONNECTION_ERROR;
  onMessage: typeof WS_GET_USER_HISTORY_ORDERS | typeof WS_GET_ORDERS;
};

export const webSocketMiddleware = (
  url: string,
  actions: WSActions,
  withToken: boolean
): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TStore>) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, onClose, onError, onMessage } = actions;

      if (type === wsInit) {
        socket = withToken
          ? (socket = new WebSocket(
              `${url}?token=${getCookie("accessToken")?.split("Bearer ")[1]}`
            ))
          : new WebSocket(url);
      }

      if (socket) {
        socket.onerror = (event) => {
          dispatch({ type: onError });
        };

        socket.onmessage = (event) => {
          dispatch({ type: onMessage, payload: JSON.parse(event.data) });
        };

        socket.onclose = (event) => {
          console.log("closing");
        };
      }

      if (type === onClose) {
        socket?.close();
      }

      next(action);
    };
  }) as Middleware;
};
