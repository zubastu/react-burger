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
import ModalAnimationLayout from "../ModalAnimationLayout/ModalAnimationLayout";
import { BurgerConstructorContext } from "../../cotexts/BurgerConstructorContext";
import { api } from "../../utils/api";

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
    orderResponseInfo: {},
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
    orderResponseInfo,
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

  const { fetchGet } = api(API_URL);

  const selectBun = (bun) => {
    setState({
      ...state,
      selectedBun: bun.name === selectedBun.name ? {} : bun,
      isSelectedBun: bun.name !== selectedBun.name,
    });
  };

  const selectIngredient = (ingredient) => {
    const checkIngredients = () => {
      const checkInCart = (item) => ingredient._id === item._id;
      return selectedIngredients.some(checkInCart);
    };

    if (!checkIngredients()) {
      setState({
        ...state,
        selectedIngredients: [...selectedIngredients, ingredient],
      });
    }
  };

  const getTotalPrice = (ingredients, selectedBun) => {
    return ingredients.reduce((prev, curr) => {
      return prev + curr.price;
    }, selectedBun.price * 2 || 0);
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

  const openOrderInfo = (data) => {
    setState({
      ...state,
      isOpenOrderDetails: true,
      orderResponseInfo: data,
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
      fetchGet(API_URL)
        .then(({ data }) => filterData(data))
        .catch((e) => console.log(e));
    };
    fetchData();
  }, []);

  return (
    <div className={appStyles.app}>
      <ModalAnimationLayout
        isOpen={isOpenOrderDetails}
        onClose={closeOrderInfo}
        extraClassName="pb-30"
      >
        <OrderDetails orderResponseInfo={orderResponseInfo} />
      </ModalAnimationLayout>

      <ModalAnimationLayout
        isOpen={isOpenIngredientDetails}
        onClose={closeIngredientDetails}
        text="Детали ингредиента"
        extraClassName="pb-15"
      >
        <IngredientDetails ingredient={selectedMaterialItem} />
      </ModalAnimationLayout>

      <AppHeader />
      <Main>
        <>
          <BurgerIngredients
            bun={bun}
            sauces={sauces}
            main={main}
            selectedBun={selectedBun}
            selectedIngredients={selectedIngredients}
            selectIngredient={openIngredientInfo /*selectIngredient*/} //Для проверки работоспособности корзины
            selectBun={selectBun}
          />
          <BurgerConstructorContext.Provider
            value={{
              totalPrice,
              selectedBun,
              selectedIngredients,
            }}
          >
            <BurgerConstructor openOrderInfo={openOrderInfo}>
              {isSelectedBun && (
                <div className={`${appStyles.constructor} ml-8`}>
                  <ConstructorElement
                    price={selectedBun.price}
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
                />
              ))}
              {isSelectedBun && (
                <div className={`${appStyles.constructor} ml-8`}>
                  <ConstructorElement
                    price={selectedBun.price}
                    text={`${selectedBun.name} (низ)`}
                    thumbnail={selectedBun.image}
                    isLocked={true}
                    type="bottom"
                  />
                </div>
              )}
            </BurgerConstructor>
          </BurgerConstructorContext.Provider>
        </>
      </Main>
    </div>
  );
}

export default App;
