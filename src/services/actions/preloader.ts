export const PRELOADER_START: "PRELOADER_START" = "PRELOADER_START";
export const PRELOADER_STOP: "PRELOADER_STOP" = "PRELOADER_STOP";

export interface IPreloaderStart {
  readonly type: typeof PRELOADER_START;
}
export interface IPreloaderStop {
  readonly type: typeof PRELOADER_STOP;
}

export type TPreloaderActions = IPreloaderStart | IPreloaderStop;
