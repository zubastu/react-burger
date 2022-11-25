import {
  SUCCESS_RESTORE_PASS,
  ERROR_RESTORE_PASS,
  START_RESTORE_PASS,
} from "../actions/restore-pass";

import { RESET_PASS_URL } from "../../utils/constants";
import { api } from "../../utils/api";

const { fetchPost } = api(RESET_PASS_URL);

export const postRegistrationDetails = (data) => (dispatch) => {
  dispatch({ type: START_RESTORE_PASS });
  fetchPost(data)
    .then((response) =>
      response && response.success
        ? dispatch({ type: SUCCESS_RESTORE_PASS, payload: response })
        : dispatch({ type: ERROR_RESTORE_PASS })
    )
    .catch((err) => dispatch({ type: ERROR_RESTORE_PASS }));
};
