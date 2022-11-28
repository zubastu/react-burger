import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
} from "../actions/user";
import { api } from "../../utils/api";
import { USER_INFO_URL } from "../../utils/constants";
const { fetchSecurePatch } = api(USER_INFO_URL);

export const changeUserInfo = (data) => (dispatch) => {
  dispatch({ type: GET_USER_INFO_START });
  return fetchSecurePatch(data)
    .then((response) => {
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
    })
    .catch((err) => dispatch({ type: GET_USER_INFO_ERROR }));
};
