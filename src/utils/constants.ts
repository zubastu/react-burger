import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppThunk } from "../services/reducers";
import { TStore } from "../types";

const BASE_URL = "https://norma.nomoreparties.space/";
export const INGREDIENTS_URL = `${BASE_URL}api/ingredients`;
export const ORDERS_URL = `${BASE_URL}api/orders`;
export const FORGOT_PASS_URL = `${BASE_URL}api/password-reset`;
export const RESET_PASS_URL = `${BASE_URL}api/password-reset/reset`;
export const LOGIN_URL = `${BASE_URL}api/auth/login`;
export const REGISTER_URL = `${BASE_URL}api/auth/register`;
export const LOGOUT_URL = `${BASE_URL}api/auth/logout`;
export const REFRESH_TOKEN_URL = `${BASE_URL}api/auth/token`;
export const USER_INFO_URL = `${BASE_URL}api/auth/user`;
export const ORDER_URL = `${BASE_URL}api/orders`;

export const WS_URL_ORDERS_ALL = "wss://norma.nomoreparties.space/orders/all";
export const WS_URL_ORDERS_USER_HISTORY =
  "wss://norma.nomoreparties.space/orders";

export const TYPE_BUN: string = "bun";
export const TYPE_SAUCE: string = "sauce";
export const TYPE_MAIN: string = "main";

export const useAppDispatch = () => useDispatch<AppDispatch & AppThunk>();
export const useAppSelector: TypedUseSelectorHook<TStore> = useSelector;
