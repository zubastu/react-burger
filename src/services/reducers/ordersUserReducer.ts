import {
  WS_USER_HISTORY_CONNECTION_CLOSE,
  WS_USER_HISTORY_CONNECTION_ERROR,
  WS_USER_HISTORY_INIT,
  TWSUserHistoryActions,
  WS_GET_USER_HISTORY_ORDERS,
} from "../actions/wsUserHistoryActions";
import { TWSData } from "../../types";

type ordersUserReducerState = {
  wsConnected: boolean;
  data: TWSData;
};

const initialState: ordersUserReducerState = {
  wsConnected: false,
  data: {
    success: false,
    orders: [],
    total: 0,
    totalToday: 0,
  },
};

export const ordersUserReducer = (
  state = initialState,
  action: TWSUserHistoryActions
) => {
  switch (action.type) {
    case WS_USER_HISTORY_INIT:
      return {
        ...state,
        wsConnected: true,
      };
    case WS_USER_HISTORY_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_USER_HISTORY_CONNECTION_CLOSE:
      return {
        ...state,
        wsConnected: false,
        data: {
          ...state.data,
          success: false,
        },
      };
    case WS_GET_USER_HISTORY_ORDERS:
      return {
        ...state,
        data: {
          ...state.data,
          orders: action.payload.orders.reverse(),
          success: action.payload.success,
          total: action.payload.total,
          totalToday: action.payload.totalToday,
        },
      };
    default:
      return state;
  }
};
