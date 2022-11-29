import {
  ERROR_RESTORE_PASS,
  RESET_REQUEST_ACCEPT,
  START_RESTORE_PASS,
  SUCCESS_RESTORE_PASS,
} from "../actions/restore-pass";
import { RESET_PASS_URL } from "../../utils/constants";
import { api } from "../../utils/api";
import {
  SHOW_REQUEST_ERROR_INFO,
  SHOW_REQUEST_INFO,
} from "../actions/requestInformation";
import { PRELOADER_START, PRELOADER_STOP } from "../actions/preloader";
const { fetchPost } = api(RESET_PASS_URL);

export const resetPasswordPost = (data) => (dispatch) => {
  dispatch({ type: START_RESTORE_PASS });
  dispatch({ type: PRELOADER_START });
  return fetchPost(data)
    .then((response) => {
      if (response && response.success) {
        dispatch({ type: SUCCESS_RESTORE_PASS, payload: response });
        dispatch({ type: RESET_REQUEST_ACCEPT });
        dispatch({ type: SHOW_REQUEST_INFO, payload: response.message });
        dispatch({ type: PRELOADER_STOP });
      }
    })
    .catch((err) => {
      err
        .json()
        .then((data) => {
          dispatch({ type: SHOW_REQUEST_ERROR_INFO, payload: data.message });
          dispatch({ type: ERROR_RESTORE_PASS });
          dispatch({ type: PRELOADER_STOP });
        })
        .finally(() => dispatch({ type: PRELOADER_STOP }));
    });
};
