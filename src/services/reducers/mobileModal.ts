import {
  TMobileModalActions,
  MOBILE_MODAL_CLOSE,
  MOBILE_MODAL_OPEN,
} from "../actions/mobileNavigationModal";

export type TPreloaderReducer = {
  isMobileModalOpen: boolean;
};

export const initialState: TPreloaderReducer = {
  isMobileModalOpen: false,
};

export const mobileModalReducer = (
  state = initialState,
  action: TMobileModalActions
): TPreloaderReducer => {
  switch (action.type) {
    case MOBILE_MODAL_OPEN: {
      return {
        ...state,
        isMobileModalOpen: true,
      };
    }
    case MOBILE_MODAL_CLOSE: {
      return {
        ...state,
        isMobileModalOpen: false,
      };
    }
    default:
      return state;
  }
};
