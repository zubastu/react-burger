import {
  CLOSE_REQUEST_INFO,
  SHOW_REQUEST_INFO,
  SHOW_REQUEST_ERROR_INFO,
} from "../actions/requestInformation";
import {
  initialState,
  requestInformationReducer as reducer,
} from "./requestInformation";

describe("Тест Редьюсера requestInformation", () => {
  it("should CLOSE_REQUEST_INFO", () => {
    expect(reducer(initialState, { type: CLOSE_REQUEST_INFO })).toEqual({
      ...initialState,
      isOpened: false,
      isError: false,
      textInfo: "",
    });
  });

  it("should SHOW_REQUEST_INFO", () => {
    const payload = "text";
    expect(reducer(initialState, { type: SHOW_REQUEST_INFO, payload })).toEqual(
      {
        ...initialState,
        isOpened: true,
        isError: false,
        textInfo: payload,
      }
    );
  });

  it("should SHOW_REQUEST_ERROR_INFO", () => {
    const payload = "text";
    expect(
      reducer(initialState, { type: SHOW_REQUEST_ERROR_INFO, payload })
    ).toEqual({
      ...initialState,
      isOpened: true,
      isError: true,
      textInfo: payload,
    });
  });
});
