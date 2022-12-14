import {
  GET_USER_INFO_START,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
  RESET_USER_INFO,
} from "../actions/user";

const initialState = {
  isRequest: false,
  isError: false,
  user: {},
};

export const userInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_INFO_START:
      return {
        ...state,
        isRequest: true,
        isError: false,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        isRequest: false,
        isError: false,
        user: action.payload,
      };
    case GET_USER_INFO_ERROR:
      return {
        ...state,
        isRequest: false,
        isError: true,
      };
    case RESET_USER_INFO:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
};
