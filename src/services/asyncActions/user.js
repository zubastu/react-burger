import {
  GET_USER_INFO_START,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
} from "../actions/user";

import { api } from "../../utils/api";
import { USER_INFO_URL } from "../../utils/constants";
import { refreshTokenAccess } from "./refreshToken";
const { fetchSecureGet, fetchSecurePatch } = api(USER_INFO_URL);

export const getUserInfo = () => (dispatch) => {
  dispatch({ type: GET_USER_INFO_START });
  fetchSecureGet()
    .then((response) => {
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
    })
    .catch((err) => {
      if (err === "Ошибка: 401") {
        dispatch(refreshTokenAccess()).then(() =>
          fetchSecureGet()
            .then((response) => {
              dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
            })
            .catch((err) => dispatch({ type: GET_USER_INFO_ERROR }))
        );
      }
      dispatch({ type: GET_USER_INFO_ERROR });
    });
};

export const changeUserInfo = (data) => (dispatch) => {
  dispatch({ type: GET_USER_INFO_START });
  fetchSecurePatch(data)
    .then((response) => {
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
    })
    .catch((err) => {
      if (err === "Ошибка: 401") {
        fetchSecurePatch(data)
          .then((response) => {
            dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
          })
          .catch((err) => dispatch({ type: GET_USER_INFO_ERROR }));
      }
      dispatch({ type: GET_USER_INFO_ERROR });
    });
};
