import {
  ERROR_FORGOT_PASS,
  START_FORGOT_PASS,
  SUCCESS_FORGOT_PASS,
} from "../actions/forgot-pass";
import { api } from "../../utils/api";
import { FORGOT_PASS_URL } from "../../utils/constants";
import { SHOW_REQUEST_ERROR_INFO } from "../actions/requestInformation";
import { SUCCESS_RESTORE_PASS } from "../actions/restore-pass";
import { PRELOADER_START, PRELOADER_STOP } from "../actions/preloader";
import { AppThunk } from "../reducers";
import { TErrorData } from "../../types";
const { fetchPost } = api(FORGOT_PASS_URL);

export type TRestorePassword = {
  email: string;
};

export const restorePassword: AppThunk =
  (data: TRestorePassword) => (dispatch) => {
    dispatch({ type: START_FORGOT_PASS });
    dispatch({ type: PRELOADER_START });
    fetchPost(data)
      .then((response) => {
        if (response && response.success) {
          dispatch({ type: SUCCESS_RESTORE_PASS });
          dispatch({ type: SUCCESS_FORGOT_PASS });
          dispatch({ type: PRELOADER_STOP });
        }
      })
      .catch((err) => {
        err.json().then((data: TErrorData) => {
          dispatch({ type: ERROR_FORGOT_PASS });
          dispatch({ type: SHOW_REQUEST_ERROR_INFO, payload: data.message });
          dispatch({ type: PRELOADER_STOP });
        });
      })
      .finally(() => dispatch({ type: PRELOADER_STOP }));
  };
