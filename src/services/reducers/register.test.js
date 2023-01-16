import {
  SUCCESS_REGISTRATION,
  ERROR_REGISTRATION,
  START_REGISTRATION,
  RESET_REGISTRATION,
} from "../actions/register";
import { initialState, registrationReducer as reducer } from "./register";

describe("Тест Редьюсера ingredients", () => {
  it("should SUCCESS_REGISTRATION", () => {
    expect(reducer(initialState, { type: SUCCESS_REGISTRATION })).toEqual({
      ...initialState,
      isRequest: false,
      isError: false,
      hasRequest: true,
    });
  });

  it("should ERROR_REGISTRATION", () => {
    expect(reducer(initialState, { type: ERROR_REGISTRATION })).toEqual({
      ...initialState,
      isRequest: false,
      isError: true,
    });
  });

  it("should START_REGISTRATION", () => {
    expect(reducer(initialState, { type: START_REGISTRATION })).toEqual({
      ...initialState,
      isRequest: true,
      isError: false,
    });
  });

  it("should RESET_REGISTRATION", () => {
    expect(reducer(initialState, { type: RESET_REGISTRATION })).toEqual({
      ...initialState,
      hasRequest: false,
    });
  });
});
