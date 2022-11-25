import { START_LOGIN, ERROR_LOGIN, SUCCESS_LOGIN } from "../actions/login";

import { LOGIN_URL } from "../../utils/constants";
import { api } from "../../utils/api";

const { fetchPost } = api(LOGIN_URL);

export const postRegistrationDetails = (data) => (dispatch) => {
  dispatch({ type: START_LOGIN });
  fetchPost(data)
    .then((response) =>
      response && response.success
        ? dispatch({ type: SUCCESS_LOGIN, payload: response })
        : dispatch({ type: ERROR_LOGIN })
    )
    .catch((err) => dispatch({ type: ERROR_LOGIN }));
};
