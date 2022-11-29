import {
  SUCCESS_REGISTRATION,
  ERROR_REGISTRATION,
  START_REGISTRATION,
} from "../actions/register";

import { REGISTER_URL } from "../../utils/constants";
import { api } from "../../utils/api";
import {
  SHOW_REQUEST_ERROR_INFO,
  SHOW_REQUEST_INFO,
} from "../actions/requestInformation";

const { fetchPost } = api(REGISTER_URL);

export const postRegistrationDetails = (data) => (dispatch) => {
  dispatch({ type: START_REGISTRATION });
  fetchPost(data)
    .then((response) => {
      if (response && response.success) {
        dispatch({ type: SUCCESS_REGISTRATION, payload: response });
        dispatch({
          type: SHOW_REQUEST_INFO,
          payload: "Вы успешно зарегистрировались!",
        });
      }
    })
    .catch((err) => {
      err.json().then((data) => {
        dispatch({ type: ERROR_REGISTRATION });
        dispatch({ type: SHOW_REQUEST_ERROR_INFO, payload: data.message });
      });
    });
};
