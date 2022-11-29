import {
  SUCCESS_REGISTRATION,
  ERROR_REGISTRATION,
  START_REGISTRATION,
  RESET_REGISTRATION,
} from "../actions/register";

const initialState = {
  isRequest: false,
  isError: false,
  hasRequest: false,
};

export const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_REGISTRATION:
      return {
        ...state,
        isRequest: true,
        isError: false,
      };
    case SUCCESS_REGISTRATION:
      return {
        ...state,
        isRequest: false,
        isError: false,
        hasRequest: true,
      };
    case ERROR_REGISTRATION:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    case RESET_REGISTRATION:
      return {
        ...state,
        hasRequest: false,
      };
    default:
      return state;
  }
};
