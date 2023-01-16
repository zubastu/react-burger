import {
  GET_USER_INFO_START,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
  RESET_USER_INFO,
} from "../actions/user";
import { initialState, userInfoReducer as reducer } from "./user";

describe("Тест Редьюсера ingredients", () => {
  it("should GET_USER_INFO_START", () => {
    expect(reducer(initialState, { type: GET_USER_INFO_START })).toEqual({
      ...initialState,
      isRequest: true,
      isError: false,
    });
  });

  it("should GET_USER_INFO_SUCCESS", () => {
    const payload = {
      name: "username",
      email: "userEmail",
    };
    expect(
      reducer(initialState, { type: GET_USER_INFO_SUCCESS, payload })
    ).toEqual({
      ...initialState,
      isRequest: false,
      isError: false,
      user: payload,
    });
  });

  it("should GET_USER_INFO_ERROR", () => {
    expect(reducer(initialState, { type: GET_USER_INFO_ERROR })).toEqual({
      ...initialState,
      isRequest: false,
      isError: true,
    });
  });

  it("should RESET_USER_INFO", () => {
    expect(reducer(initialState, { type: RESET_USER_INFO })).toEqual({
      ...initialState,
      user: { name: "", email: "", password: "" },
    });
  });
});
