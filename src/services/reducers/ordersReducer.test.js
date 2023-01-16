import {
  WS_GET_ORDERS,
  WS_ORDERS_CONNECTION_ERROR,
  WS_ORDERS_CONNECTION_INIT,
  WS_ORDERS_CONNECTION_CLOSE,
} from "../actions/wsOrdersActions";
import { initialState, ordersReducer as reducer } from "./ordersReducer";

describe("Тест Редьюсера ingredients", () => {
  it("should WS_ORDERS_CONNECTION_INIT", () => {
    expect(reducer(initialState, { type: WS_ORDERS_CONNECTION_INIT })).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it("should WS_ORDERS_CONNECTION_CLOSE", () => {
    expect(reducer(initialState, { type: WS_ORDERS_CONNECTION_CLOSE })).toEqual(
      {
        ...initialState,
        data: {
          ...initialState.data,
          success: false,
        },
      }
    );
  });

  it("should WS_ORDERS_CONNECTION_ERROR", () => {
    expect(reducer(initialState, { type: WS_ORDERS_CONNECTION_ERROR })).toEqual(
      {
        ...initialState,
        wsConnected: false,
      }
    );
  });

  it("should WS_GET_ORDERS", () => {
    const payload = {
      orders: [],
      success: true,
      total: 100,
      totalToday: 10,
    };
    expect(reducer(initialState, { type: WS_GET_ORDERS, payload })).toEqual({
      ...initialState,
      data: {
        ...initialState.data,
        orders: payload.orders,
        success: payload.success,
        total: payload.total,
        totalToday: payload.totalToday,
      },
    });
  });
});
