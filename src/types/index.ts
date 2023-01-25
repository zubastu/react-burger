import { store } from "../services/store";
import React from "react";
import * as H from "history";
import { TForgotPassActions } from "../services/actions/forgot-pass";
import { TIngredientsActions } from "../services/actions/ingredients";
import { TLoginActions } from "../services/actions/login";
import { TOrderActions } from "../services/actions/order";
import { TPreloaderActions } from "../services/actions/preloader";
import { TRefreshTokenActions } from "../services/actions/refreshToken";
import { TRegisterActions } from "../services/actions/register";
import { TRequestInformationActions } from "../services/actions/requestInformation";
import { TRestorePasswordActions } from "../services/actions/restore-pass";
import { TUserActions } from "../services/actions/user";
import { TWSOrdersActions } from "../services/actions/wsOrdersActions";

export type TModalState = {
  background?: H.Location;
};

export type TLocationState = {
  from: {
    pathname: string;
  };
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
    owner?: {
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

export type TApplicationActions =
  | TForgotPassActions
  | TIngredientsActions
  | TLoginActions
  | TOrderActions
  | TPreloaderActions
  | TRefreshTokenActions
  | TRegisterActions
  | TRequestInformationActions
  | TRestorePasswordActions
  | TUserActions
  | TWSOrdersActions;

export type TErrorData = {
  success: boolean;
  message: string;
};

export type TOrder = {
  ingredients: string[];
  _id: string;
  status?: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
};

export type TWSData = {
  success: boolean;
  orders: TOrder[];
  total: 0;
  totalToday: 0;
};

export type TCurrentOrderResponse = {
  success: boolean;
  orders: TCurrentOrder[];
};

export type TCurrentOrder = {
  _id: string;
  ingredients: string[];
  owner: string;
  status: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  __v: number;
};
