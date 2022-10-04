import React, { useState, useEffect } from "react";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import MaterialInCart from "../MaterialInCart/MaterialInCart";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  API_URL,
  TYPE_BUN,
  TYPE_MAIN,
  TYPE_SAUCE,
} from "../../utils/constants";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

function App() {
  const [state, setState] = useState({
    bun: [],
    sauces: [],
    main: [],
    selectedBun: {},
    selectedIngredients: [],
    isSelectedBun: false,
    totalPrice: 0,
    isOpenIngredientDetails: false,
    isOpenOrderDetails: false,
    selectedMaterialItem: {},
  });

  const {
    bun,
    sauces,
    main,
    selectedBun,
    selectedIngredients,
    isSelectedBun,
    totalPrice,
    isOpenIngredientDetails,
    isOpenOrderDetails,
    selectedMaterialItem,
  } = state;

  const filterData = (data) => {
    const bun = data.filter(({ type }) => type === TYPE_BUN);
    const sauces = data.filter(({ type }) => type === TYPE_SAUCE);
    const main = data.filter(({ type }) => type === TYPE_MAIN);
    setState({
      ...state,
      bun: bun,
      sauces: sauces,
      main: main,
    });
  };

  const selectBun = (bun) => {
    setState({
      ...state,
      selectedBun: bun.name === selectedBun.name ? {} : bun,
      isSelectedBun: bun.name !== selectedBun.name,
    });
  };

  const selectIngredient = (ingredient) => {
    setState({
      ...state,
      selectedIngredients: [...selectedIngredients, ingredient],
    });
  };

  const getTotalPrice = (ingredients, selectedBun) => {
    return ingredients.reduce((prev, curr) => {
      return prev + curr.price;
    }, selectedBun.price || 0);
  };

  const removeIngredient = (id) => {
    setState({
      ...state,
      selectedIngredients: selectedIngredients.filter(
        (item) => item._id !== id
      ),
    });
  };

  const openIngredientInfo = (ingredient) => {
    setState({
      ...state,
      selectedMaterialItem: ingredient,
      isOpenIngredientDetails: true,
    });
  };

  const openOrderInfo = () => {
    setState({
      ...state,
      isOpenOrderDetails: true,
    });
  };

  const closeOrderInfo = () => {
    setState({
      ...state,
      isOpenOrderDetails: false,
    });
  };

  const closeIngredientDetails = () => {
    setState({
      ...state,
      selectedMaterialItem: {},
      isOpenIngredientDetails: false,
    });
  };

  useEffect(() => {
    setState({
      ...state,
      totalPrice: getTotalPrice(selectedIngredients, selectedBun),
    });
  }, [selectedIngredients, selectedBun]);

  useEffect(() => {
    const fetchData = () => {
      fetch(API_URL)
        .then((res) =>
          res.ok ? res.json() : Promise.reject("Ошибка запроса к серверу")
        )
        .then(({ data }) => filterData(data))
        .catch((e) => console.log(e));
    };
    fetchData();
  }, []);

  return (
    <div className={appStyles.app}>
      {isOpenOrderDetails && (
        <Modal
          isOpen={isOpenOrderDetails}
          onClose={closeOrderInfo}
          extraClassName="pb-30"
        >
          <OrderDetails />
        </Modal>
      )}
      {isOpenIngredientDetails && (
        <Modal
          isOpen={isOpenIngredientDetails}
          onClose={closeIngredientDetails}
          text="Детали ингредиента"
          extraClassName="pb-15"
        >
          <IngredientDetails ingredient={selectedMaterialItem} />
        </Modal>
      )}

      <AppHeader />
      <Main>
        <>
          <BurgerIngredients
            bun={bun}
            sauces={sauces}
            main={main}
            selectedBun={selectedBun}
            selectedIngredients={selectedIngredients}
            selectBun={selectBun}
            selectIngredient={openIngredientInfo}
          />

          <BurgerConstructor
            totalPrice={totalPrice}
            openOrderInfo={openOrderInfo}
          >
            {isSelectedBun && (
              <div className={`${appStyles.constructor} ml-8`}>
                <ConstructorElement
                  price={selectedBun.price / 2}
                  text={`${selectedBun.name} (верх)`}
                  thumbnail={selectedBun.image}
                  isLocked={true}
                  type="top"
                />
              </div>
            )}
            {selectedIngredients.map((item, index) => (
              <MaterialInCart
                image={item.image}
                price={item.price}
                name={item.name}
                _id={item._id}
                key={item._id}
                product={item}
                onDelete={removeIngredient}
                showInfo={openIngredientInfo}
              />
            ))}
            {isSelectedBun && (
              <div className={`${appStyles.constructor} ml-8`}>
                <ConstructorElement
                  price={selectedBun.price / 2}
                  text={`${selectedBun.name} (низ)`}
                  thumbnail={selectedBun.image}
                  isLocked={true}
                  type="bottom"
                />
              </div>
            )}
          </BurgerConstructor>
        </>
      </Main>
    </div>
  );
}

export default App;
