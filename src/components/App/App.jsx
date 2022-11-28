import React, { useEffect } from "react";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients";
import ModalSwitch from "../ModalSwitch/ModalSwitch";
import { checkAuth } from "../../services/asyncActions/auth";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((store) => store.login);
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  useEffect(() => {
    if (!isLogged) {
      dispatch(checkAuth(isLogged));
    }
  }, [isLogged]);

  return (
    <div className={styles.app}>
      <ModalSwitch />
    </div>
  );
}

export default App;
