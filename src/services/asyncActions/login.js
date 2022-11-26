import { START_LOGIN, ERROR_LOGIN, SUCCESS_LOGIN } from "../actions/login";

import { LOGIN_URL } from "../../utils/constants";
import { api } from "../../utils/api";
import { GET_USER_INFO_SUCCESS } from "../actions/user";

const { fetchPost } = api(LOGIN_URL);

export const postRegistrationDetails = (data) => (dispatch) => {
  dispatch({ type: START_LOGIN });
  fetchPost(data)
    .then((response) => {
      dispatch({ type: SUCCESS_LOGIN, payload: response });
      dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
    })
    .catch((err) => dispatch({ type: ERROR_LOGIN }));
};
