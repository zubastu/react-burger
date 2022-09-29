import React, { useState, useEffect } from "react";

import appStyles from "./App.module.css";

import PropTypes from "prop-types";

import AppHeader from "../AppHeader/AppHeader";
import { Routes, Route } from "react-router";
import Main from "../Main/Main";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import { data } from "../../utils/data";

function App() {
  const [materials, setMaterials] = useState({
    bun: [],
    sauces: [],
    main: [],
  });
  const filterData = (data) => {
    const bun = data.filter(({ type }) => type === "bun");
    const sauces = data.filter(({ type }) => type === "sauce");
    const main = data.filter(({ type }) => type === "main");
    setMaterials({
      bun: bun,
      sauces: sauces,
      main: main,
    });
  };

  useEffect(() => {
    filterData(data);
  }, []);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <>
                <BurgerConstructor materials={materials} />
                <BurgerIngredients></BurgerIngredients>
              </>
            </Main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
