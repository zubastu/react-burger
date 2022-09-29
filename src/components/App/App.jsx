import React from "react";

import appStyles from "./App.module.css";

import PropTypes from "prop-types";

import AppHeader from "../AppHeader/AppHeader";
import { Routes, Route } from "react-router";
import Main from "../Main/Main";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";

function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Main>
        <Routes>
          <Route
            path="/"
            element={
              <Main>
                <>
                  <BurgerConstructor></BurgerConstructor>
                  <BurgerConstructor></BurgerConstructor>
                  {/*<BurgerIngredients></BurgerIngredients>*/}
                </>
              </Main>
            }
          />
        </Routes>
      </Main>
    </div>
  );
}

export default App;
