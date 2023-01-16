import {
  CLOSE_ORDER_MODAL,
  ERROR_ORDER_POST,
  GET_ORDER_ERROR,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  START_ORDER_POST,
  SUCCESS_ORDER_POST,
} from "../actions/order";
import { initialState, orderReducer as reducer } from "./order";

describe("Тест Редьюсера ingredients", () => {
  it("should CLOSE_ORDER_MODAL", () => {
    expect(reducer(initialState, { type: CLOSE_ORDER_MODAL })).toEqual({
      ...initialState,
      isOpenOrderModal: false,
    });
  });

  it("should ERROR_ORDER_POST", () => {
    expect(reducer(initialState, { type: ERROR_ORDER_POST })).toEqual({
      ...initialState,
      isRequestError: true,
      isRequest: false,
    });
  });

  it("should GET_ORDER_ERROR", () => {
    expect(reducer(initialState, { type: GET_ORDER_ERROR })).toEqual({
      ...initialState,
      isRequest: false,
      isRequestError: true,
    });
  });

  it("should GET_ORDER_START", () => {
    expect(reducer(initialState, { type: GET_ORDER_START })).toEqual({
      ...initialState,
      isRequest: true,
      isRequestError: false,
    });
  });

  it("should GET_ORDER_SUCCESS", () => {
    const payload = {};
    expect(reducer(initialState, { type: GET_ORDER_SUCCESS, payload })).toEqual(
      {
        ...initialState,
        isRequestError: false,
        isRequest: false,
        currentOrder: payload,
      }
    );
  });

  it("should START_ORDER_POST", () => {
    expect(reducer(initialState, { type: START_ORDER_POST })).toEqual({
      ...initialState,
      isRequestError: false,
      isRequest: true,
    });
  });

  it("should SUCCESS_ORDER_POST", () => {
    const payload = {};
    expect(
      reducer(initialState, { type: SUCCESS_ORDER_POST, payload })
    ).toEqual({
      ...initialState,
      isRequestError: false,
      isRequest: false,
      isOpenOrderModal: true,
      orderDetails: payload,
    });
  });
});
