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
  payload?: { url: string; id: string };
};

export const webSocketMiddleware = (
  actions: WSActions,
  socketId: string
): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TStore>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: TWSAction) => {
      const { dispatch } = store;

      const { wsInit, disconnect, onError, onMessage } = actions;

      if (
        action.type === wsInit &&
        socket === null &&
        action.payload &&
        socketId === action.payload.id
      ) {
        console.log(`open ${action.payload?.id}`);
        socket = new WebSocket(action.payload.url);

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
      } else if (
        action.type === disconnect &&
        socket !== null &&
        socketId === action.payload?.id
      ) {
        console.log(`close ${action.payload?.id}`);
        socket.close();
      }

      next(action);
    };
  }) as Middleware;
};
