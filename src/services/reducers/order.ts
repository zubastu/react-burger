import {
  CLOSE_ORDER_MODAL,
  ERROR_ORDER_POST,
  GET_ORDER_ERROR,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
  START_ORDER_POST,
  SUCCESS_ORDER_POST,
  TOrderActions,
} from "../actions/order";
import { TCurrentOrderResponse, TOrderResponse } from "../../types";

type TOrderReducerState = {
  isRequest: boolean;
  isRequestError: boolean;
  orderDetails: TOrderResponse;
  isOpenOrderModal: boolean;
  currentOrder: TCurrentOrderResponse;
};

const initialState: TOrderReducerState = {
  isRequest: false,
  isRequestError: false,
  isOpenOrderModal: false,
  currentOrder: {
    success: false,
    orders: [
      {
        _id: "",
        ingredients: [],
        owner: "",
        status: "",
        name: "",
        createdAt: "",
        updatedAt: "",
        number: 0,
        __v: 0,
      },
    ],
  },
  orderDetails: {
    success: false,
    name: "",
    order: {
      ingredients: [],
      _id: "",
      owner: {
        name: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      },
      status: "",
      name: "",
      createdAt: "",
      updatedAt: "",
      number: 0,
      price: 0,
    },
  },
};

export const orderReducer = (
  state = initialState,
  action: TOrderActions
): TOrderReducerState => {
  switch (action.type) {
    case ERROR_ORDER_POST:
      return {
        ...state,
        isRequestError: true,
        isRequest: false,
      };
    case START_ORDER_POST:
      return {
        ...state,
        isRequestError: false,
        isRequest: true,
      };
    case SUCCESS_ORDER_POST:
      return {
        ...state,
        isRequestError: false,
        isRequest: false,
        isOpenOrderModal: true,
        orderDetails: action.payload,
      };
    case CLOSE_ORDER_MODAL:
      return {
        ...state,
        isOpenOrderModal: false,
      };
    case GET_ORDER_SUCCESS:
      return {
        ...state,
        isRequestError: false,
        isRequest: false,
        currentOrder: action.payload,
      };
    case GET_ORDER_START:
      return {
        ...state,
        isRequest: true,
        isRequestError: false,
      };
    case GET_ORDER_ERROR:
      return {
        ...state,
        isRequest: false,
        isRequestError: true,
      };
    default:
      return state;
  }
};
