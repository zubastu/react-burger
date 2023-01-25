import {
  TWSOrdersActions,
  WS_GET_ORDERS,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_CONNECTION_INIT,
  WS_ORDERS_CONNECTION_CLOSE,
} from "../actions/wsOrdersActions";
import { TWSData } from "../../types";

export type TOrdersReducer = {
  wsConnected: boolean;
  data: TWSData;
};

export const initialState: TOrdersReducer = {
  wsConnected: false,
  data: {
    success: false,
    orders: [],
    total: 0,
    totalToday: 0,
  },
};

export const ordersReducer = (
  state = initialState,
  action: TWSOrdersActions
) => {
  switch (action.type) {
    case WS_ORDERS_CONNECTION_INIT:
      return {
        ...state,
        wsConnected: true,
      };
    case WS_ORDERS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_ORDERS_CONNECTION_CLOSE:
      return {
        ...state,
        wsConnected: false,
        data: {
          ...state.data,
          success: false,
        },
      };
    case WS_GET_ORDERS:
      return {
        ...state,
        data: {
          ...state.data,
          orders: action.payload.orders,
          success: action.payload.success,
          total: action.payload.total,
          totalToday: action.payload.totalToday,
        },
      };
    default:
      return state;
  }
};
