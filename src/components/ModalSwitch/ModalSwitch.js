import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
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
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_ORDER_MODAL } from "../../services/actions/order";
import { CLOSE_INGREDIENT_DETAILS } from "../../services/actions/ingredients";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AppHeader from "../AppHeader/AppHeader";
import RequestInformation from "../RequestInformation/RequestInformation";
import { CLOSE_REQUEST_INFO } from "../../services/actions/requestInformation";
import Preloader from "../Preloader/Preloader";

const ModalSwitch = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isOpenOrderModal } = useSelector((store) => store.order);
  const { isOpened } = useSelector((store) => store.request);
  const { isPreloaderActive } = useSelector((store) => store.preloader);

  const closeOrderModal = () => dispatch({ type: CLOSE_ORDER_MODAL });
  const closeIngredientModal = () => {
    dispatch({ type: CLOSE_INGREDIENT_DETAILS });
    history.goBack();
  };
  const closeRequestModal = () => dispatch({ type: CLOSE_REQUEST_INFO });

  const background = location.state && location.state.background;

  return (
    <>
      <AppHeader />
      <Switch location={background || location}>
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

        <ProtectedRoute path="/profile">
          <ProfilePage />
        </ProtectedRoute>

        <Route exact path="/ingredients/:ingredientId">
          <IngredientPage />
        </Route>

        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      {background ? (
        <Route exact path="/ingredients/:ingredientId">
          <Modal
            text="Детали ингредиента"
            extraClassName="pb-15"
            onClose={closeIngredientModal}
          >
            <IngredientDetails hasHeading={false} />
          </Modal>
        </Route>
      ) : null}

      {isOpenOrderModal ? (
        <Modal extraClassName="pb-30" onClose={closeOrderModal}>
          <OrderDetails />
        </Modal>
      ) : null}

      {isOpened ? (
        <Modal text="Результат запроса" onClose={closeRequestModal}>
          <RequestInformation />
        </Modal>
      ) : null}

      {isPreloaderActive ? <Preloader /> : null}
    </>
  );
};

export default ModalSwitch;
