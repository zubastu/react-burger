import React, { useEffect } from "react";
import styles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients";
import ModalSwitch from "../ModalSwitch/ModalSwitch";
import { REFRESH_TOKEN_SUCCESS } from "../../services/actions/refreshToken";
import { LOGIN_CHECKED, LOGOUT } from "../../services/actions/login";
import {
  GET_USER_INFO_ERROR,
  GET_USER_INFO_SUCCESS,
} from "../../services/actions/user";
import { api } from "../../utils/api";
import { USER_INFO_URL } from "../../utils/constants";
import { getCookie } from "../../utils/cookie";

function App() {
  const dispatch = useDispatch();
  const { fetchSecureGet, refreshToken } = api(USER_INFO_URL);
  const { isLogged } = useSelector((store) => store.login);
  const token = getCookie("accessToken");
  const refresh = getCookie("refreshToken");

  const checkAuth = () => {
    if (!refresh) {
      return;
    }
    if (!token) {
      refreshToken()
        .then((res) => dispatch({ type: REFRESH_TOKEN_SUCCESS, payload: res }))
        .catch((err) => dispatch({ type: LOGOUT }));
    } else if (!isLogged) {
      fetchSecureGet()
        .then((response) => {
          dispatch({ type: LOGIN_CHECKED });
          dispatch({ type: GET_USER_INFO_SUCCESS, payload: response.user });
        })
        .catch((err) => dispatch({ type: GET_USER_INFO_ERROR }));
    }
  };

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    if (!isLogged) {
      checkAuth();
    }
  }, [isLogged]);

  return (
    <div className={styles.app}>
      <ModalSwitch auth={checkAuth} />
    </div>
  );
}

export default App;
