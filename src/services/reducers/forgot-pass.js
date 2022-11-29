import {
  ERROR_FORGOT_PASS,
  START_FORGOT_PASS,
  SUCCESS_FORGOT_PASS,
} from "../actions/forgot-pass";

const initialState = {
  isRequest: false,
  isError: false,
};

export const forgetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FORGOT_PASS:
      return {
        ...state,
        isRequest: true,
        isError: false,
      };
    case ERROR_FORGOT_PASS:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    case SUCCESS_FORGOT_PASS:
      return {
        ...state,
        isRequest: false,
        isError: false,
      };
    default:
      return state;
  }
};
