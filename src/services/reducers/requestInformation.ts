import {
  CLOSE_REQUEST_INFO,
  SHOW_REQUEST_INFO,
  SHOW_REQUEST_ERROR_INFO,
  TRequestInformationActions,
} from "../actions/requestInformation";

export type TRequestInformationReducer = {
  isOpened: boolean;
  isError: boolean;
  textInfo: string;
};

export const initialState: TRequestInformationReducer = {
  isOpened: false,
  isError: false,
  textInfo: "",
};

export const requestInformationReducer = (
  state = initialState,
  action: TRequestInformationActions
): TRequestInformationReducer => {
  switch (action.type) {
    case SHOW_REQUEST_INFO:
      return {
        ...state,
        isOpened: true,
        isError: false,
        textInfo: action.payload,
      };
    case SHOW_REQUEST_ERROR_INFO:
      return {
        ...state,
        isOpened: true,
        isError: true,
        textInfo: action.payload,
      };
    case CLOSE_REQUEST_INFO:
      return {
        ...state,
        isOpened: false,
        isError: false,
        textInfo: "",
      };
    default:
      return state;
  }
};
