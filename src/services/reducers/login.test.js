import {
  START_LOGIN,
  ERROR_LOGIN,
  SUCCESS_LOGIN,
  LOGOUT,
  LOGIN_CHECKED,
} from "../actions/login";
import { initialState, loginReducer as reducer } from "./login";

describe("Тест Редьюсера login", () => {
  it("should START_LOGIN", () => {
    expect(reducer(initialState, { type: START_LOGIN })).toEqual({
      ...initialState,
      isRequest: true,
      isError: false,
    });
  });

  it("should ERROR_LOGIN", () => {
    expect(reducer(initialState, { type: ERROR_LOGIN })).toEqual({
      ...initialState,
      isRequest: false,
      isError: true,
    });
  });

  it("should SUCCESS_LOGIN", () => {
    const payload = {
      accessToken: "token",
      refreshToken: "token",
      success: true,
      user: {
        name: "username",
        email: "userEmail",
      },
    };
    expect(reducer(initialState, { type: SUCCESS_LOGIN, payload })).toEqual({
      ...initialState,
      isRequest: false,
      isError: false,
      isLogged: true,
    });
  });

  it("should LOGOUT", () => {
    expect(reducer(initialState, { type: LOGOUT })).toEqual({
      ...initialState,
      isRequest: false,
      isError: false,
      isLogged: false,
    });
  });

  it("should LOGIN_CHECKED", () => {
    expect(reducer(initialState, { type: LOGIN_CHECKED })).toEqual({
      ...initialState,
      isLogged: true,
    });
  });
});
