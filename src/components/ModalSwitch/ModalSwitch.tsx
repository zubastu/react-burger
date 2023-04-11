import React from "react";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";
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
import { TModalState } from "../../types";
import { useAppDispatch, useAppSelector } from "../../utils/constants";
import OrderInfo from "../OrderInfo/OrderInfo";
import PageContentContainer from "../PageContentContainer/PageContentContainer";
import NavigationPopup from "../NavigationModal/NavigationPopup";
import { MOBILE_MODAL_CLOSE } from "../../services/actions/mobileNavigationModal";

const container = document.getElementById("react-modals") as HTMLElement;

const ModalSwitch = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useAppDispatch();

  const { isOpenOrderModal } = useAppSelector((store) => store.order);
  const { isOpened } = useAppSelector((store) => store.request);
  const { isPreloaderActive } = useAppSelector((store) => store.preloader);
  const { currentOrder } = useAppSelector((store) => store.order);
  const { isMobileModalOpen } = useAppSelector((store) => store.mobileModal);

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

  const closeMobileModal = (): void => {
    dispatch({ type: MOBILE_MODAL_CLOSE });
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
        <Route exact path="/feed/:orderNumber">
          <PageContentContainer customMargin="122px">
            <OrderInfo />
          </PageContentContainer>
        </Route>

        <ProtectedRoute exact path="/profile/orders">
          <OrdersHistory />
        </ProtectedRoute>

        <ProtectedRoute exact path="/profile/orders/:orderNumber">
          <PageContentContainer customMargin="122px">
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

          <Route exact path="/feed/:orderNumber">
            <Modal
              container={container}
              onClose={() => history.goBack()}
              text={`#${currentOrder.success && currentOrder.orders[0].number}`}
              extraClassName="pb-10"
            >
              <OrderInfo isModal={true} />
            </Modal>
          </Route>

          <ProtectedRoute path="/profile/orders/:orderNumber">
            <Modal
              container={container}
              onClose={() => history.goBack()}
              text={`#${currentOrder.success && currentOrder.orders[0].number}`}
              extraClassName="pb-10"
            >
              <OrderInfo isModal={true} />
            </Modal>
          </ProtectedRoute>
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

      <NavigationPopup
        menuActive={isMobileModalOpen}
        closeMobileModal={closeMobileModal}
      />

      {isOpened ? (
        <Modal
          text="Результат запроса"
          onClose={closeRequestModal}
          container={container}
          extraClassName="pb-10"
        >
          <RequestInformation />
        </Modal>
      ) : null}

      {isPreloaderActive ? <Preloader /> : null}
    </>
  );
};

export default ModalSwitch;
