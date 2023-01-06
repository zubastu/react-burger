import {
  TWSOrdersActions,
  WS_GET_ORDERS,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_CONNECTION_SUCCESS,
  WS_ORDERS_CONNECTION_CLOSED,
} from "../actions/wsOrdersActions";
import { TWSData } from "../../types";

export type TOrdersReducer = {
  wsConnected: boolean;
  data: TWSData;
};

const initialState: TOrdersReducer = {
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
    case WS_ORDERS_CONNECTION_SUCCESS:
      return {
        ...state,
        wsConnected: true,
      };
    case WS_ORDERS_CONNECTION_ERROR:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_ORDERS_CONNECTION_CLOSED:
      return {
        ...state,
        wsConnected: false,
      };
    case WS_GET_ORDERS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
