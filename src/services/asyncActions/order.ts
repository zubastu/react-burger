import {
  START_ORDER_POST,
  ERROR_ORDER_POST,
  SUCCESS_ORDER_POST,
  GET_ORDER_ERROR,
  GET_ORDER_START,
  GET_ORDER_SUCCESS,
} from "../actions/order";
import { ORDER_URL, ORDERS_URL } from "../../utils/constants";
import { api, TOrder } from "../../utils/api";
import { RESET_INGREDIENTS } from "../actions/ingredients";
import { PRELOADER_START, PRELOADER_STOP } from "../actions/preloader";
import { AppThunk } from "../reducers";

const { fetchSecurePost } = api(ORDERS_URL);

export const postOrderDetails: AppThunk = (data: TOrder) => (dispatch) => {
  dispatch({ type: START_ORDER_POST });
  dispatch({ type: PRELOADER_START });
  fetchSecurePost(data)
    .then((response) => {
      if (response && response.success) {
        dispatch({ type: SUCCESS_ORDER_POST, payload: response });
        dispatch({ type: RESET_INGREDIENTS });
      }
    })
    .catch(() => dispatch({ type: ERROR_ORDER_POST }))
    .finally(() => dispatch({ type: PRELOADER_STOP }));
};

export const getCurrentOrder: AppThunk =
  (orderNumber: string | number) => (dispatch) => {
    const { fetchGet } = api(`${ORDER_URL}/${orderNumber}`);
    dispatch({ type: GET_ORDER_START });
    fetchGet()
      .then((response) => {
        if (response && response.success) {
          dispatch({ type: GET_ORDER_SUCCESS, payload: response });
        }
      })
      .catch(() => dispatch({ type: GET_ORDER_ERROR }));
  };
