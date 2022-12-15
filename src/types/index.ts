import store from "../services/store";
import React from "react";
import PropTypes from "prop-types";

export type TStore = ReturnType<typeof store.getState>;
export type TPathnameString = { pathname: string };
export type TIsLogged = { isLogged: boolean };
export type TChildrenNode = React.ReactNode | React.ReactElement;

export type TBackground = {
  hash: string;
  pathname: string;
  search: string;
  state: object | undefined;
};

export type TIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export type TConstructorIngredient = TIngredient & { id: string };
