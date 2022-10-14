import {
  ERROR_INGREDIENTS_FETCH,
  START_INGREDIENTS_FETCH,
  SUCCESS_INGREDIENTS_FETCH,
} from "../actions/ingredients";
import { INGREDIENTS_URL } from "../../utils/constants";
import { api } from "../../utils/api";

const { fetchGet } = api(INGREDIENTS_URL);

export const fetchIngredients = () => (dispatch) => {
  dispatch({ type: START_INGREDIENTS_FETCH });
  fetchGet()
    .then((response) =>
      response && response.success
        ? dispatch({ type: SUCCESS_INGREDIENTS_FETCH, payload: response.data })
        : dispatch({ type: ERROR_INGREDIENTS_FETCH })
    )
    .catch((err) => dispatch({ type: ERROR_INGREDIENTS_FETCH }));
};
