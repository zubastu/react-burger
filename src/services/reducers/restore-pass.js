import {
  ERROR_REGISTRATION,
  START_REGISTRATION,
  SUCCESS_REGISTRATION,
} from "../actions/register";

const initialState = {};

export const restorePasswordReducer = (state = initialState, action) => {
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
      };
    case ERROR_REGISTRATION:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    default:
      return state;
  }
};
