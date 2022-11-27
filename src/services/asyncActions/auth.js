import { browserHistory, USER_INFO_URL } from "../../utils/constants";
import {
  ERROR_LOGIN,
  LOGIN_CHECKED,
  LOGOUT,
  SUCCESS_LOGIN,
} from "../actions/login";
import { GET_USER_INFO_ERROR, GET_USER_INFO_SUCCESS } from "../actions/user";
import { api } from "../../utils/api";
import { LOGIN_URL } from "../../utils/constants";
import {
  ERROR_RESTORE_PASS,
  START_RESTORE_PASS,
  SUCCESS_RESTORE_PASS,
} from "../actions/restore-pass";
import { getCookie } from "../../utils/cookie";
import { REFRESH_TOKEN_SUCCESS } from "../actions/refreshToken";
const { fetchPost } = api(LOGIN_URL);

export const handleLogin = (data) => (dispatch) => {
  fetchPost(data)
    .then((response) => {
      if (response && response.success) {
        dispatch({ type: SUCCESS_LOGIN, payload: response });
        dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
        browserHistory.push("/");
      } else {
        dispatch({ type: ERROR_LOGIN });
      }
    })
    .catch((err) => dispatch({ type: ERROR_LOGIN }));
};

export const postRegistrationDetails = (data) => (dispatch) => {
  dispatch({ type: START_RESTORE_PASS });
  return fetchPost(data)
    .then((response) => {
      if (response && response.success) {
        dispatch({ type: SUCCESS_RESTORE_PASS, payload: response });
        dispatch({ type: ERROR_RESTORE_PASS });
        browserHistory.push("/login");
      }
    })
    .catch((err) => dispatch({ type: ERROR_RESTORE_PASS }));
};

const { fetchSecureGet, refreshToken } = api(USER_INFO_URL);
const token = getCookie("accessToken");
const refresh = getCookie("refreshToken");

export const checkAuth = (isLogged) => (dispatch) => {
  if (!refresh) {
    return;
  }
  if (!token) {
    refreshToken()
      .then((res) => dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: res }))
      .catch((err) => dispatch({ type: LOGOUT }));
  } else if (!isLogged) {
    fetchSecureGet()
      .then((response) => {
        dispatch({ type: LOGIN_CHECKED });
        dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
      })
      .catch((err) => dispatch({ type: GET_USER_INFO_ERROR }));
  }
};
