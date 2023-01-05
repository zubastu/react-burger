// @ts-nocheck

import type { Middleware, MiddlewareAPI } from "redux";
import type { AppDispatch } from "../reducers";
import type { TStore } from "../../types";

export const webSocketMiddleware = (actions: any): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, TStore>) => {
    let socket: WebSocket | null = null;
    return (next) => (action) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;
      const { wsInit } = actions;

      if (type === wsInit) {
        socket = new WebSocket();
      }
      if (socket) {
        socket.onopen = (event) => console.log(event);
        socket.onerror = (event) => console.log(event);
        socket.onmessage = (event) => console.log(event);
        socket.onclose = (event) => console.log(event);
      }

      next(action);
    };
  }) as Middleware;
};
