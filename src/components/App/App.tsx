import React, { FC, useEffect } from "react";

import styles from "./App.module.css";
import { fetchIngredients } from "../../services/asyncActions/ingredients";
import ModalSwitch from "../ModalSwitch/ModalSwitch";
import { checkAuth } from "../../services/asyncActions/auth";
import { TStore } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector((store: TStore) => store.login);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkAuth());
  }, [isLogged]);

  return (
    <div className={styles.app}>
      <ModalSwitch />
    </div>
  );
};

export default App;
