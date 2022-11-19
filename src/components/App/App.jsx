import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients";
import {
  ForgetPasswordPage,
  IngredientPage,
  LoginPage,
  MainPage,
  NotFound,
  ProfilePage,
  RegisterPage,
  RestorePasswordPage,
} from "../../pages";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  return (
    <div className={styles.app}>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/register">
          <RegisterPage />
        </Route>

        <Route path="/forgot-password">
          <ForgetPasswordPage />
        </Route>

        <Route path="/reset-password">
          <RestorePasswordPage />
        </Route>

        <Route path="/profile">
          <ProfilePage />
        </Route>

        <Route path="/ingredients/:id">
          <IngredientPage />
        </Route>

        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
