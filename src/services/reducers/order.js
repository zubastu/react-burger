import {
  SUCCESS_ORDER_POST,
  ERROR_ORDER_POST,
  START_ORDER_POST,
  CLOSE_ORDER_MODAL,
} from "../actions/order";

const initialState = {
  isRequest: false,
  isRequestError: false,
  orderDetails: {},
  isOpenOrderModal: false,
};

export const orderReducer = (state = initialState, action) => {
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
        isRequestError: true,
        isRequest: false,
      };
    case SUCCESS_ORDER_POST:
      return {
        ...state,
        isRequestError: true,
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
