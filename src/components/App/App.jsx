import React, { useEffect } from "react";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Main>
        <BurgerIngredients />
        <BurgerConstructor />
      </Main>
    </div>
  );
}

export default App;
