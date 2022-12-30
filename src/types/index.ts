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
  index?: number;
};

export type TConstructorIngredient = TIngredient & { id: string };

export type TUser = {
  name: string;
  email: string;
  password?: string;
};

export type TLogin = {
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: TUser;
};

export type TOrderResponse = {
  success: boolean;
  name: string;
  order: {
    ingredients: TIngredient[];
    _id: string;
    owner: {
      name: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    status: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    number: number;
    price: number;
  };
};

export type TRefreshToken = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};
