import React, { useState, useEffect } from "react";
import appStyles from "./App.module.css";
import AppHeader from "../AppHeader/AppHeader";
import { Routes, Route } from "react-router";
import Main from "../Main/Main";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import MaterialInCart from "../MaterialInCart/MaterialInCart";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  API_URL,
  TYPE_BUN,
  TYPE_MAIN,
  TYPE_SAUCE,
} from "../../utils/constants";

function App() {
  const [state, setState] = useState({
    bun: [],
    sauces: [],
    main: [],
    selectedBun: {},
    selectedIngredients: [],
    isSelectedBun: false,
    totalPrice: 0,
  });

  const {
    bun,
    sauces,
    main,
    selectedBun,
    selectedIngredients,
    isSelectedBun,
    totalPrice,
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
      <AppHeader />
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <>
                <BurgerConstructor
                  bun={bun}
                  sauces={sauces}
                  main={main}
                  selectedBun={selectedBun}
                  selectedIngredients={selectedIngredients}
                  selectBun={selectBun}
                  selectIngredient={selectIngredient}
                />

                <BurgerIngredients totalPrice={totalPrice}>
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
                      key={index}
                      onDelete={removeIngredient}
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
                </BurgerIngredients>
              </>
            </Main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
