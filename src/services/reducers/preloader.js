import { PRELOADER_STOP, PRELOADER_START } from "../actions/preloader";

const initialState = {
  isPreloaderActive: false,
};

export const preloaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRELOADER_START: {
      return {
        ...state,
        isPreloaderActive: true,
      };
    }
    case PRELOADER_STOP: {
      return {
        ...state,
        isPreloaderActive: false,
      };
    }
    default:
      return state;
  }
};
