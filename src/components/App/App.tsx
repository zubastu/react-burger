import React, { FC, useEffect } from "react";

import styles from "./App.module.css";
import { fetchIngredients } from "../../services/asyncActions/ingredients";
import ModalSwitch from "../ModalSwitch/ModalSwitch";
import { checkAuth } from "../../services/asyncActions/auth";
import { useAppDispatch, useAppSelector } from "../../utils/constants";

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { isLogged } = useAppSelector((store) => store.login);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    dispatch(checkAuth());
  }, [isLogged, dispatch]);

  return (
    <div className={styles.app}>
      <ModalSwitch />
    </div>
  );
};

export default App;
