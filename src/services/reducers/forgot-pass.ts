import {
  ERROR_FORGOT_PASS,
  START_FORGOT_PASS,
  SUCCESS_FORGOT_PASS,
  TForgotPassActions,
} from "../actions/forgot-pass";

type TForgetPasswordReducer = {
  isRequest: boolean;
  isError: boolean;
};

const initialState: TForgetPasswordReducer = {
  isRequest: false,
  isError: false,
};

export const forgetPasswordReducer = (
  state = initialState,
  action: TForgotPassActions
): TForgetPasswordReducer => {
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
