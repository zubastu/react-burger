import {
  ERROR_FORGOT_PASS,
  START_FORGOT_PASS,
  SUCCESS_FORGOT_PASS,
} from "../actions/forgot-pass";
import { api } from "../../utils/api";
import { FORGOT_PASS_URL } from "../../utils/constants";
import { SHOW_REQUEST_ERROR_INFO } from "../actions/requestInformation";
import { SUCCESS_RESTORE_PASS } from "../actions/restore-pass";
const { fetchPost } = api(FORGOT_PASS_URL);

export const restorePassword = (data) => (dispatch) => {
  dispatch({ type: START_FORGOT_PASS });
  fetchPost(data)
    .then((response) => {
      if (response && response.success) {
        dispatch({ type: SUCCESS_RESTORE_PASS });
        dispatch({ type: SUCCESS_FORGOT_PASS });
      } else {
        dispatch({ type: ERROR_FORGOT_PASS });
      }
    })
    .catch((err) => {
      err.json().then((data) => {
        dispatch({ type: ERROR_FORGOT_PASS });
        dispatch({ type: SHOW_REQUEST_ERROR_INFO, payload: data.message });
      });
    });
};
