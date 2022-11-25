import {
  ERROR_FORGOT_PASS,
  START_FORGOT_PASS,
  SUCCESS_FORGOT_PASS,
} from "../actions/forgot-pass";
import { FORGOT_PASS_URL } from "../../utils/constants";
import { api } from "../../utils/api";

const { fetchPost } = api(FORGOT_PASS_URL);

export const postRegistrationDetails = (data) => (dispatch) => {
  dispatch({ type: START_FORGOT_PASS });
  fetchPost(data)
    .then((response) =>
      response && response.success
        ? dispatch({ type: SUCCESS_FORGOT_PASS, payload: response })
        : dispatch({ type: ERROR_FORGOT_PASS })
    )
    .catch((err) => dispatch({ type: ERROR_FORGOT_PASS }));
};
