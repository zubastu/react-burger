import { TConstructorIngredient, TIngredient } from "../../types";

export const START_INGREDIENTS_FETCH: "START_INGREDIENTS_FETCH" =
  "START_INGREDIENTS_FETCH";
export const ERROR_INGREDIENTS_FETCH: "ERROR_INGREDIENTS_FETCH" =
  "ERROR_INGREDIENTS_FETCH";
export const SUCCESS_INGREDIENTS_FETCH: "SUCCESS_INGREDIENTS_FETCH" =
  "SUCCESS_INGREDIENTS_FETCH";
export const OPEN_INGREDIENT_DETAILS: "OPEN_INGREDIENT_DETAILS" =
  "OPEN_INGREDIENT_DETAILS";
export const CLOSE_INGREDIENT_DETAILS: "CLOSE_INGREDIENT_DETAILS" =
  "CLOSE_INGREDIENT_DETAILS";
export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const SELECT_BUN: "SELECT_BUN" = "SELECT_BUN";
export const DELETE_INGREDIENT: "DELETE_INGREDIENT" = "DELETE_INGREDIENT";
export const UPDATE_INGREDIENTS: "UPDATE_INGREDIENTS" = "UPDATE_INGREDIENTS";
export const RESET_INGREDIENTS: "RESET_INGREDIENTS" = "RESET_INGREDIENTS";
export const RESET_BUN: "RESET_BUN" = "RESET_BUN";

export interface IStartIngredientsFetch {
  readonly type: typeof START_INGREDIENTS_FETCH;
}
export interface ISuccessIngredientsFetch {
  readonly type: typeof SUCCESS_INGREDIENTS_FETCH;
  readonly payload: Array<TIngredient>;
}
export interface IErrorIngredientsFetch {
  readonly type: typeof ERROR_INGREDIENTS_FETCH;
}

export interface IOpenIngredientDetails {
  readonly type: typeof OPEN_INGREDIENT_DETAILS;
  readonly payload: TIngredient;
}
export interface ICloseIngredientDetails {
  readonly type: typeof CLOSE_INGREDIENT_DETAILS;
}

export interface IAddIngredient {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: TConstructorIngredient;
}
export interface ISelectBun {
  readonly type: typeof SELECT_BUN;
  readonly payload: TConstructorIngredient;
}

export interface IDeleteIngredient {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: string;
}
export interface IUpdateIngredients {
  readonly type: typeof UPDATE_INGREDIENTS;
  readonly payload: Array<TConstructorIngredient>;
}
export interface IResetIngredients {
  readonly type: typeof RESET_INGREDIENTS;
}

export interface IResetBun {
  readonly type: typeof RESET_BUN;
}

export type TIngredientsActions =
  | IStartIngredientsFetch
  | ISuccessIngredientsFetch
  | IErrorIngredientsFetch
  | IOpenIngredientDetails
  | ICloseIngredientDetails
  | IAddIngredient
  | ISelectBun
  | IDeleteIngredient
  | IUpdateIngredients
  | IResetIngredients
  | IResetBun;
