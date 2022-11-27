import {
  ERROR_RESTORE_PASS,
  START_RESTORE_PASS,
  SUCCESS_RESTORE_PASS,
} from "../actions/restore-pass";
import {
  browserHistory,
  LOGIN_URL,
  RESET_PASS_URL,
} from "../../utils/constants";
import { api } from "../../utils/api";
const { fetchPost } = api(RESET_PASS_URL);

export const resetPasswordPost = (data) => (dispatch) => {
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
