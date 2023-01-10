import React from "react";
import { Route, Switch, useHistory, useLocation, Link } from "react-router-dom";
import {
  Feed,
  ForgetPasswordPage,
  IngredientPage,
  LoginPage,
  MainPage,
  NotFound,
  ProfilePage,
  RegisterPage,
  RestorePasswordPage,
  OrdersHistory,
} from "../../pages";
import Modal from "../Modal/Modal";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import OrderDetails from "../OrderDetails/OrderDetails";
import { CLOSE_ORDER_MODAL } from "../../services/actions/order";
import { CLOSE_INGREDIENT_DETAILS } from "../../services/actions/ingredients";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AppHeader from "../AppHeader/AppHeader";
import RequestInformation from "../RequestInformation/RequestInformation";
import { CLOSE_REQUEST_INFO } from "../../services/actions/requestInformation";
import Preloader from "../Preloader/Preloader";
import { TStore, TModalState } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";
import OrderInfo from "../OrderInfo/OrderInfo";
import PageContentContainer from "../PageContentContainer/PageContentContainer";

const container = document.getElementById("react-modals") as HTMLElement;

const ModalSwitch = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const { isOpenOrderModal } = useAppSelector((store: TStore) => store.order);
  const { isOpened } = useAppSelector((store: TStore) => store.request);
  const { isPreloaderActive } = useAppSelector(
    (store: TStore) => store.preloader
  );

  const closeOrderModal = (): void => {
    dispatch({ type: CLOSE_ORDER_MODAL });
  };

  const closeIngredientModal = (): void => {
    dispatch({ type: CLOSE_INGREDIENT_DETAILS });
    history.goBack();
  };

  const closeRequestModal = (): void => {
    dispatch({ type: CLOSE_REQUEST_INFO });
  };

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

        <Route exact path="/profile">
          <ProfilePage />
        </Route>

        <Route exact path="/ingredients/:ingredientId">
          <IngredientPage />
        </Route>

        <Route exact path="/feed">
          <Feed />
        </Route>
        <Route exact path="/feed/:id">
          <PageContentContainer>
            <OrderInfo />
          </PageContentContainer>
        </Route>

        <ProtectedRoute exact path="/profile/orders">
          <OrdersHistory />
        </ProtectedRoute>

        <ProtectedRoute exact path="/profile/orders/:id">
          <PageContentContainer>
            <OrderInfo />
          </PageContentContainer>
        </ProtectedRoute>

        <Route exact path="/">
          <MainPage />
        </Route>

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      {state?.background ? (
        <Switch>
          <Route exact path="/ingredients/:ingredientId">
            <Modal
              text="Детали ингредиента"
              extraClassName="pb-15"
              onClose={closeIngredientModal}
              container={container}
            >
              <IngredientDetails hasHeading={false} />
            </Modal>
          </Route>

          <Route exact path="/feed/:id">
            <Modal container={container} onClose={() => history.goBack()}>
              <OrderInfo />
            </Modal>
          </Route>

          <Route exact path="/profile/orders/:id">
            <Modal container={container} onClose={() => history.goBack()}>
              <OrderInfo />
            </Modal>
          </Route>
        </Switch>
      ) : null}

      {isOpenOrderModal ? (
        <Modal
          extraClassName="pb-30"
          onClose={closeOrderModal}
          container={container}
        >
          <OrderDetails />
        </Modal>
      ) : null}

      {isOpened ? (
        <Modal
          text="Результат запроса"
          onClose={closeRequestModal}
          container={container}
        >
          <RequestInformation />
        </Modal>
      ) : null}

      {isPreloaderActive ? <Preloader /> : null}
    </>
  );
};

export default ModalSwitch;
