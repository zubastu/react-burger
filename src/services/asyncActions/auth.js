import { USER_INFO_URL } from "../../utils/constants";
import {
  ERROR_LOGIN,
  LOGIN_CHECKED,
  LOGOUT,
  SUCCESS_LOGIN,
} from "../actions/login";
import { GET_USER_INFO_ERROR, GET_USER_INFO_SUCCESS } from "../actions/user";
import { api } from "../../utils/api";
import { LOGIN_URL } from "../../utils/constants";
import { getCookie } from "../../utils/cookie";
import { REFRESH_TOKEN_SUCCESS } from "../actions/refreshToken";
import { PRELOADER_START, PRELOADER_STOP } from "../actions/preloader";
const { fetchPost } = api(LOGIN_URL);
const { fetchSecureGet, refreshToken } = api(USER_INFO_URL);
const token = getCookie("accessToken");
const refresh = getCookie("refreshToken");

export const handleLogin = (data) => (dispatch) => {
  dispatch({ type: PRELOADER_START });
  fetchPost(data)
    .then((response) => {
      if (response && response.success) {
        dispatch({ type: SUCCESS_LOGIN, payload: response });
        dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
      } else {
        dispatch({ type: ERROR_LOGIN });
      }
    })
    .catch((err) => dispatch({ type: ERROR_LOGIN }))
    .finally(() => dispatch({ type: PRELOADER_STOP }));
};

export const checkAuth = (isLogged) => (dispatch) => {
  if (!refresh) {
    return;
  }
  if (!token) {
    dispatch({ type: PRELOADER_START });
    refreshToken()
      .then((res) => dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: res }))
      .catch((err) => dispatch({ type: LOGOUT }))
      .finally(() => dispatch({ type: PRELOADER_STOP }));
  } else if (!isLogged) {
    dispatch({ type: PRELOADER_START });
    fetchSecureGet()
      .then((response) => {
        dispatch({ type: LOGIN_CHECKED });
        dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
      })
      .catch((err) => dispatch({ type: GET_USER_INFO_ERROR }))
      .finally(() => dispatch({ type: PRELOADER_STOP }));
  }
};
