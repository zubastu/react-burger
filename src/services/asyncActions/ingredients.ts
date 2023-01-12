import {
  ERROR_INGREDIENTS_FETCH,
  START_INGREDIENTS_FETCH,
  SUCCESS_INGREDIENTS_FETCH,
} from "../actions/ingredients";
import { INGREDIENTS_URL } from "../../utils/constants";
import { api } from "../../utils/api";
import { PRELOADER_START, PRELOADER_STOP } from "../actions/preloader";
import { AppThunk } from "../reducers";

const { fetchGet } = api(INGREDIENTS_URL);

export const fetchIngredients: AppThunk = () => (dispatch) => {
  dispatch({ type: START_INGREDIENTS_FETCH });
  dispatch({ type: PRELOADER_START });
  fetchGet()
    .then((response) =>
      response && response.success
        ? dispatch({
            type: SUCCESS_INGREDIENTS_FETCH,
            payload: response.data,
          })
        : dispatch({ type: ERROR_INGREDIENTS_FETCH })
    )
    .catch(() => dispatch({ type: ERROR_INGREDIENTS_FETCH }))
    .finally(() => dispatch({ type: PRELOADER_STOP }));
};
