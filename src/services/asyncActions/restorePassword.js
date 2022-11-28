import { browserHistory } from "../../utils/constants";
import {
  ERROR_FORGOT_PASS,
  START_FORGOT_PASS,
  SUCCESS_FORGOT_PASS,
} from "../actions/forgot-pass";
import { api } from "../../utils/api";
import { FORGOT_PASS_URL } from "../../utils/constants";
const { fetchPost } = api(FORGOT_PASS_URL);

export const restorePassword = (data) => (dispatch) => {
  dispatch({ type: START_FORGOT_PASS });
  fetchPost(data)
    .then((response) => {
      if (response && response.success) {
        dispatch({ type: SUCCESS_FORGOT_PASS, payload: response });
        dispatch({ type: ERROR_FORGOT_PASS });
        browserHistory.push("/reset-password");
      }
    })
    .catch((err) => dispatch({ type: ERROR_FORGOT_PASS }));
};
