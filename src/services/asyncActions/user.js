import {
  GET_USER_INFO_START,
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
} from "../actions/user";

import { api } from "../../utils/api";
import { USER_INFO_URL } from "../../utils/constants";
const { fetchSecureGet } = api(USER_INFO_URL);

export const getUserInfo = () => (dispatch) => {
  dispatch({ type: GET_USER_INFO_START });
  fetchSecureGet()
    .then((response) => {
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
    })
    .catch((err) => dispatch({ type: GET_USER_INFO_ERROR }));
};
