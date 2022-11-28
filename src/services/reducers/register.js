import {
  SUCCESS_REGISTRATION,
  ERROR_REGISTRATION,
  START_REGISTRATION,
} from "../actions/register";

const initialState = {
  isRequest: false,
  isError: false,
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
