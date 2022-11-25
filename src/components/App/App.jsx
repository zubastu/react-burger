import React, { useEffect } from "react";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients";
import ModalSwitch from "../ModalSwitch/ModalSwitch";
import { api } from "../../utils/api";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { checkAuth } = api();

  useEffect(() => {
    dispatch(fetchIngredients());
    try {
      checkAuth();
    } catch (e) {
      history.push("/login");
    }
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <ModalSwitch />
    </div>
  );
}

export default App;
