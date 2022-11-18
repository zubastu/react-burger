import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import appStyles from "./App.module.css";
import { useDispatch } from "react-redux";
import { fetchIngredients } from "../../services/asyncActions/ingredients";
import MainPage from "../../pages/MainPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [dispatch]);
  return (
    <div className={appStyles.app}>
      <Switch>
        <Route path="/login">Login</Route>
        <Route path="/register">Register</Route>
        <Route path="/forgot-password">Forget Pass</Route>
        <Route path="/reset-password">Restore Pass</Route>
        <Route path="/profile">Profile</Route>
        <Route path="/ingredients/:id">ingredients</Route>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </div>
  );
}

export default App;
