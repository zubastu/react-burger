import {
  SUCCESS_RESTORE_PASS,
  ERROR_RESTORE_PASS,
  START_RESTORE_PASS,
  RESET_REQUEST_ACCEPT,
  TRestorePassword,
} from "../actions/restore-pass";

export type TRestorePasswordReducer = {
  isRequest: boolean;
  isError: boolean;
  hasRequest: boolean;
};

const initialState: TRestorePasswordReducer = {
  isRequest: false,
  isError: false,
  hasRequest: false,
};

export const restorePasswordReducer = (
  state = initialState,
  action: TRestorePassword
): TRestorePasswordReducer => {
  switch (action.type) {
    case START_RESTORE_PASS:
      return {
        ...state,
        isRequest: true,
        isError: false,
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
