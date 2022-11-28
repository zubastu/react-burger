import {
  SUCCESS_REGISTRATION,
  ERROR_REGISTRATION,
  START_REGISTRATION,
} from "../actions/register";

import { REGISTER_URL } from "../../utils/constants";
import { api } from "../../utils/api";

const { fetchPost } = api(REGISTER_URL);

export const postRegistrationDetails = (data) => (dispatch) => {
  dispatch({ type: START_REGISTRATION });
  fetchPost(data)
    .then((response) =>
      response && response.success
        ? dispatch({ type: SUCCESS_REGISTRATION, payload: response })
        : dispatch({ type: ERROR_REGISTRATION })
    )
    .catch((err) => dispatch({ type: ERROR_REGISTRATION }));
};
