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

const ModalSwitch = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isOpenOrderModal } = useSelector((store) => store.order);

  const closeOrderModal = () => dispatch({ type: CLOSE_ORDER_MODAL });
  const closeIngredientModal = () => {
    dispatch({ type: CLOSE_INGREDIENT_DETAILS });
    history.goBack();
  };

  let background = location.state && location.state.background;

  return (
    <>
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

        <Route path="/profile">
          <ProfilePage />
        </Route>

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

      {background && (
        <Route path="/ingredients/:ingredientId">
          <Modal
            text="Детали ингредиента"
            extraClassName="pb-15"
            onClose={closeIngredientModal}
          >
            <IngredientDetails />
          </Modal>
        </Route>
      )}

      {isOpenOrderModal && (
        <Modal
          extraClassName="pb-30"
          type="orderModal"
          onClose={closeOrderModal}
        >
          <OrderDetails />
        </Modal>
      )}
    </>
  );
};

export default ModalSwitch;
