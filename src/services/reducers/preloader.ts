import {
  PRELOADER_STOP,
  PRELOADER_START,
  TPreloaderActions,
} from "../actions/preloader";

export type TPreloaderReducer = {
  isPreloaderActive: boolean;
};

const initialState: TPreloaderReducer = {
  isPreloaderActive: false,
};

export const preloaderReducer = (
  state = initialState,
  action: TPreloaderActions
): TPreloaderReducer => {
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
