import type { Middleware, MiddlewareAPI } from "redux";
import type { TStore } from "../../types";
import { store } from "../store";

type AppDispatch = typeof store.dispatch;

export type WSActions = {
  wsInit: string;
  disconnect: string;
  onError: string;
  onMessage: string;
};

type TWSAction = {
  type: string;
  payload?: string;
};

export const webSocketMiddleware = (actions: WSActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TStore>) => {
    let socket: WebSocket | null = null;
    return (next) => (action: TWSAction) => {
      const { dispatch } = store;

      const { wsInit, disconnect, onError, onMessage } = actions;

      if (action.type === wsInit && socket === null && action.payload) {
        socket = new WebSocket(action.payload);

        if (socket) {
          socket.onerror = () => {
            dispatch({ type: onError });
          };

          socket.onmessage = (event) => {
            dispatch({ type: onMessage, payload: JSON.parse(event.data) });
          };

          socket.onclose = () => {
            socket = null;
          };
        }
      } else if (action.type === disconnect && socket != null) {
        socket.close();
      }

      next(action);
    };
  }) as Middleware;
};
