import React, { FC, useEffect } from "react";

import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients";
import ModalSwitch from "../ModalSwitch/ModalSwitch";
import { checkAuth } from "../../services/asyncActions/auth";
import { useSelector } from "react-redux";
import { TStore } from "../../types";

const App: FC = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((store: TStore) => store.login);
  useEffect(() => {
    fetchIngredients()(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (!isLogged) {
      checkAuth(isLogged)(dispatch);
    }
  }, [isLogged]);

  return (
    <div className={styles.app}>
      <ModalSwitch />
    </div>
  );
};

export default App;
