export const MOBILE_MODAL_OPEN: "MOBILE_MODAL_OPEN" = "MOBILE_MODAL_OPEN";
export const MOBILE_MODAL_CLOSE: "MOBILE_MODAL_CLOSE" = "MOBILE_MODAL_CLOSE";

export interface IOpenMobileModal {
  readonly type: typeof MOBILE_MODAL_OPEN;
}
export interface ICloseMobileModal {
  readonly type: typeof MOBILE_MODAL_CLOSE;
}

export type TMobileModalActions = IOpenMobileModal | ICloseMobileModal;
