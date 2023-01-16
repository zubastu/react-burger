import { PRELOADER_STOP, PRELOADER_START } from "../actions/preloader";
import { initialState, preloaderReducer as reducer } from "./preloader";

describe("Тест Редьюсера preloader", () => {
  it("should PRELOADER_STOP", () => {
    expect(reducer(initialState, { type: PRELOADER_STOP })).toEqual({
      ...initialState,
      isPreloaderActive: false,
    });
  });

  it("should PRELOADER_START", () => {
    expect(reducer(initialState, { type: PRELOADER_START })).toEqual({
      ...initialState,
      isPreloaderActive: true,
    });
  });
});
