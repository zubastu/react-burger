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
import { PRELOADER_START, PRELOADER_STOP } from "../actions/preloader";

const { fetchPost } = api(REGISTER_URL);

export const postRegistrationDetails = (data) => (dispatch) => {
  dispatch({ type: START_REGISTRATION });
  dispatch({ type: PRELOADER_START });
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
    })
    .finally(() => dispatch({ type: PRELOADER_STOP }));
};
