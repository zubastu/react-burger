import {
  ERROR_INGREDIENTS_FETCH,
  SUCCESS_INGREDIENTS_FETCH,
  START_INGREDIENTS_FETCH,
  OPEN_INGREDIENT_DETAILS,
  CLOSE_INGREDIENT_DETAILS,
  ADD_INGREDIENT,
  SELECT_BUN,
} from "../actions/ingredients";
import { TYPE_BUN, TYPE_MAIN, TYPE_SAUCE } from "../../utils/constants";

const initialState = {
  bun: [],
  sauces: [],
  main: [],
  isRequestError: false,
  isRequest: false,
  isModalIngredientOpen: false,
  selectedIngredient: {},
  selectedIngredients: [],
  selectedBun: {},
};

export const ingredientsReducer = (state = initialState, action) => {
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
        selectedIngredient: {},
      };
    case ADD_INGREDIENT:
      return {
        ...state,
        selectedIngredients: [...state.selectedIngredients, action.payload],
      };
    case SELECT_BUN:
      return {
        ...state,
        selectedBun:
          state.selectedBun.name === action.payload.name ? {} : action.payload,
      };
    default:
      return state;
  }
};
