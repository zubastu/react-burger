import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_START,
  GET_USER_INFO_SUCCESS,
} from "../actions/user";
import { api } from "../../utils/api";
import { USER_INFO_URL } from "../../utils/constants";
import {
  SHOW_REQUEST_INFO,
  SHOW_REQUEST_ERROR_INFO,
} from "../actions/requestInformation";
const { fetchSecurePatch } = api(USER_INFO_URL);

export const changeUserInfo = (data) => (dispatch) => {
  dispatch({ type: GET_USER_INFO_START });
  return fetchSecurePatch(data)
    .then((response) => {
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
      dispatch({
        type: SHOW_REQUEST_INFO,
        payload: "Данные успешно обновлены!",
      });
    })
    .catch((err) => {
      err.json().then((data) => {
        dispatch({ type: GET_USER_INFO_ERROR });
        dispatch({ type: SHOW_REQUEST_ERROR_INFO, payload: data.message });
      });
    });
};
