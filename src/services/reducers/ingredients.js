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
} from "../actions/ingredients";
import { TYPE_BUN, TYPE_MAIN, TYPE_SAUCE } from "../../utils/constants";

const initialState = {
  ingredients: [],
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
      const allIngredients = action.payload;
      return {
        ...state,
        isRequest: false,
        ingredients: allIngredients,
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
        selectedBun: {},
      };
    default:
      return state;
  }
};
