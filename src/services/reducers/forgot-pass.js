import {
  ERROR_FORGOT_PASS,
  START_FORGOT_PASS,
  SUCCESS_FORGOT_PASS,
} from "../actions/forgot-pass";

const initialState = {
  isRequest: true,
  isError: false,
  hasRequest: false,
};

export const forgetPasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FORGOT_PASS:
      return {
        ...state,
        isRequest: true,
        isError: false,
        hasRequest: false,
      };
    case ERROR_FORGOT_PASS:
      return {
        ...state,
        isRequest: false,
        isError: false,
        hasRequest: false,
      };
    case SUCCESS_FORGOT_PASS:
      return {
        ...state,
        isRequest: false,
        isError: true,
        hasRequest: true,
      };
    default:
      return state;
  }
};
