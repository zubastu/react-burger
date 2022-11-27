import {
  SUCCESS_RESTORE_PASS,
  ERROR_RESTORE_PASS,
  START_RESTORE_PASS,
  RESET_REQUEST_ACCEPT,
} from "../actions/restore-pass";

const initialState = {
  isRequest: false,
  isError: false,
  hasRequest: false,
};

export const restorePasswordReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_RESTORE_PASS:
      return {
        ...state,
        isRequest: true,
        isError: false,
        hasRequest: false,
      };
    case SUCCESS_RESTORE_PASS:
      return {
        ...state,
        isRequest: false,
        isError: false,
        hasRequest: true,
      };
    case ERROR_RESTORE_PASS:
      return {
        ...state,
        isRequest: false,
        isError: true,
        hasRequest: false,
      };
    case RESET_REQUEST_ACCEPT:
      return {
        ...state,
        hasRequest: false,
      };
    default:
      return state;
  }
};
