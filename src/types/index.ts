import store from "../services/store";
import React from "react";
import * as H from "history";

export type TModalState = {
  background?: H.Location;
};

export type TForm = {
  name?: string;
  token?: string;
  password?: string;
  email?: string;
};

export type TStore = ReturnType<typeof store.getState>;
export type TPathnameString = { pathname: string };
export type TIsLogged = { isLogged: boolean };
export type TChildrenNode = React.ReactNode | React.ReactElement;

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
