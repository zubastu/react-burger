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
import { TStore, TModalState } from "../../types";

const ModalSwitch = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const { isOpenOrderModal } = useSelector((store: TStore) => store.order);
  const { isOpened } = useSelector((store: TStore) => store.request);
  const { isPreloaderActive } = useSelector((store: TStore) => store.preloader);

  const closeOrderModal = (): any => dispatch({ type: CLOSE_ORDER_MODAL });

  const closeIngredientModal = (): void => {
    dispatch({ type: CLOSE_INGREDIENT_DETAILS });
    history.goBack();
  };

  const closeRequestModal = (): any => dispatch({ type: CLOSE_REQUEST_INFO });

  const state = location.state as TModalState;
  return (
    <>
      <AppHeader />
      <Switch location={state?.background || location}>
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

      {state?.background ? (
        <Route exact path="/ingredients/:ingredientId">
          <Modal
            text="Детали ингредиента"
            extraClassName="pb-15"
            onClose={closeIngredientModal}
            container={document.getElementById("react-modals") as HTMLElement}
          >
            <IngredientDetails hasHeading={false} />
          </Modal>
        </Route>
      ) : null}

      {isOpenOrderModal ? (
        <Modal
          extraClassName="pb-30"
          onClose={closeOrderModal}
          container={document.getElementById("react-modals") as HTMLElement}
        >
          <OrderDetails />
        </Modal>
      ) : null}

      {isOpened ? (
        <Modal
          text="Результат запроса"
          onClose={closeRequestModal}
          container={document.getElementById("react-modals") as HTMLElement}
        >
          <RequestInformation />
        </Modal>
      ) : null}

      {isPreloaderActive ? <Preloader /> : null}
    </>
  );
};

export default ModalSwitch;
