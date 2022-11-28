import {
  START_ORDER_POST,
  ERROR_ORDER_POST,
  SUCCESS_ORDER_POST,
} from "../actions/order";
import { ORDERS_URL } from "../../utils/constants";
import { api } from "../../utils/api";
import { RESET_INGREDIENTS } from "../actions/ingredients";

const { fetchSecurePost } = api(ORDERS_URL);

export const postOrderDetails = (data) => (dispatch) => {
  dispatch({ type: START_ORDER_POST });
  fetchSecurePost(data)
    .then((response) => {
      if (response && response.success) {
        dispatch({ type: SUCCESS_ORDER_POST, payload: response });
        dispatch({ type: ERROR_ORDER_POST });
        dispatch({ type: RESET_INGREDIENTS });
      }
    })
    .catch((err) => dispatch({ type: ERROR_ORDER_POST }));
};
