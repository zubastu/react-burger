import {
  REFRESH_TOKEN_START,
  REFRESH_TOKEN_ERROR,
  REFRESH_TOKEN_SUCCESS,
} from "../actions/refreshToken";

import { api } from "../../utils/api";
const { refreshToken } = api();

export const refreshTokenAccess = () => (dispatch) => {
  dispatch({ type: REFRESH_TOKEN_START });
  refreshToken()
    .then((response) =>
      response && response.success
        ? dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: response })
        : dispatch({ type: REFRESH_TOKEN_ERROR })
    )
    .catch((err) => dispatch({ type: REFRESH_TOKEN_ERROR }));
};
