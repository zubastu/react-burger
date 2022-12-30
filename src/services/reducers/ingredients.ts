import {
  ERROR_INGREDIENTS_FETCH,
  SUCCESS_INGREDIENTS_FETCH,
  START_INGREDIENTS_FETCH,
  OPEN_INGREDIENT_DETAILS,
  CLOSE_INGREDIENT_DETAILS,
  ADD_INGREDIENT,
  SELECT_BUN,
  DELETE_INGREDIENT,
  UPDATE_INGREDIENTS,
  RESET_INGREDIENTS,
  TIngredients,
} from "../actions/ingredients";
import { TYPE_BUN, TYPE_MAIN, TYPE_SAUCE } from "../../utils/constants";
import { TConstructorIngredient, TIngredient } from "../../types";

type TIngredientsReducer = {
  ingredients: TIngredient[];
  bun: TIngredient[];
  sauces: TIngredient[];
  main: TIngredient[];
  isRequestError: boolean;
  isRequest: boolean;
  isModalIngredientOpen: boolean;
  selectedIngredient: TIngredient;
  selectedIngredients: Array<TConstructorIngredient>;
  selectedBun: TConstructorIngredient;
};

const initialState: TIngredientsReducer = {
  ingredients: [],
  bun: [],
  sauces: [],
  main: [],
  isRequestError: false,
  isRequest: false,
  isModalIngredientOpen: false,
  selectedIngredient: {
    _id: "",
    name: "",
    type: "",
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: "",
    image_mobile: "",
    image_large: "",
    __v: 0,
  },
  selectedIngredients: [],
  selectedBun: {
    _id: "",
    id: "",
    name: "",
    type: "",
    proteins: 0,
    fat: 0,
    carbohydrates: 0,
    calories: 0,
    price: 0,
    image: "",
    image_mobile: "",
    image_large: "",
    __v: 0,
  },
};

export const ingredientsReducer = (
  state = initialState,
  action: TIngredients
): TIngredientsReducer => {
  switch (action.type) {
    case ERROR_INGREDIENTS_FETCH:
      return {
        ...state,
        isRequestError: true,
        isRequest: false,
      };
    case SUCCESS_INGREDIENTS_FETCH:
      return {
        ...state,
        isRequest: false,
        ingredients: action.payload,
        bun: action.payload.filter(({ type }) => type === TYPE_BUN),
        sauces: action.payload.filter(({ type }) => type === TYPE_SAUCE),
        main: action.payload.filter(({ type }) => type === TYPE_MAIN),
      };
    case START_INGREDIENTS_FETCH:
      return {
        ...state,
        isRequestError: false,
        isRequest: true,
      };
    case OPEN_INGREDIENT_DETAILS:
      return {
        ...state,
        isModalIngredientOpen: true,
        selectedIngredient: action.payload,
      };
    case CLOSE_INGREDIENT_DETAILS:
      return {
        ...state,
        isModalIngredientOpen: false,
        selectedIngredient: {
          _id: "",
          name: "",
          type: "",
          proteins: 0,
          fat: 0,
          carbohydrates: 0,
          calories: 0,
          price: 0,
          image: "",
          image_mobile: "",
          image_large: "",
          __v: 0,
        },
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.payload],
      };
    case DELETE_INGREDIENT:
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients].filter(
          ({ id }) => id !== action.payload
        ),
      };
    case SELECT_BUN:
      return {
        ...state,
        selectedBun: action.payload,
      };
    case UPDATE_INGREDIENTS:
      return {
        ...state,
        selectedIngredients: action.payload,
      };
    case RESET_INGREDIENTS:
      return {
        ...state,
        selectedIngredients: [],
        selectedBun: {
          _id: "",
          id: "",
          name: "",
          type: "",
          proteins: 0,
          fat: 0,
          carbohydrates: 0,
          calories: 0,
          price: 0,
          image: "",
          image_mobile: "",
          image_large: "",
          __v: 0,
        },
      };
    default:
      return state;
  }
};
