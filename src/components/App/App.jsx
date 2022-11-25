import React, { useEffect } from "react";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients";
import ModalSwitch from "../ModalSwitch/ModalSwitch";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <ModalSwitch />
    </div>
  );
}

export default App;
