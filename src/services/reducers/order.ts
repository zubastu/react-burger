import {
  SUCCESS_ORDER_POST,
  ERROR_ORDER_POST,
  START_ORDER_POST,
  CLOSE_ORDER_MODAL,
  TOrderActions,
} from "../actions/order";
import { TOrderResponse } from "../../types";

type TOrderReducerState = {
  isRequest: boolean;
  isRequestError: boolean;
  orderDetails: TOrderResponse;
  isOpenOrderModal: boolean;
};

const initialState: TOrderReducerState = {
  isRequest: false,
  isRequestError: false,
  isOpenOrderModal: false,
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
    default:
      return state;
  }
};
