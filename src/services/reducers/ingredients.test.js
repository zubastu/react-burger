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

import { initialState, ingredientsReducer as reducer } from "./ingredients";
const ingredient = {
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
};

describe("Тест Редьюсера ingredients", () => {
  it("should ERROR_INGREDIENTS_FETCH", () => {
    expect(reducer(initialState, { type: ERROR_INGREDIENTS_FETCH })).toEqual({
      ...initialState,
      isRequestError: true,
      isRequest: false,
    });
  });

  it("should SUCCESS_INGREDIENTS_FETCH", () => {
    const payload = [];
    expect(
      reducer(initialState, { type: SUCCESS_INGREDIENTS_FETCH, payload })
    ).toEqual({
      ...initialState,
      isRequest: false,
      ingredients: payload,
      bun: payload,
      sauces: payload,
      main: payload,
    });
  });

  it("should START_INGREDIENTS_FETCH", () => {
    expect(reducer(initialState, { type: START_INGREDIENTS_FETCH })).toEqual({
      ...initialState,
      isRequestError: false,
      isRequest: true,
    });
  });

  it("should OPEN_INGREDIENT_DETAILS", () => {
    const payload = {
      _id: "test",
      name: "test",
      type: "test",
      proteins: 0,
      fat: 0,
      carbohydrates: 0,
      calories: 0,
      price: 0,
      image: "test",
      image_mobile: "test",
      image_large: "test",
      __v: 0,
    };
    expect(
      reducer(initialState, { type: OPEN_INGREDIENT_DETAILS, payload })
    ).toEqual({
      ...initialState,
      isModalIngredientOpen: true,
      selectedIngredient: payload,
    });
  });

  it("should CLOSE_INGREDIENT_DETAILS", () => {
    expect(reducer(initialState, { type: CLOSE_INGREDIENT_DETAILS })).toEqual({
      ...initialState,
      isModalIngredientOpen: false,
      selectedIngredient: ingredient,
    });
  });

  it("should ADD_INGREDIENT", () => {
    const payload = {};
    expect(reducer(initialState, { type: ADD_INGREDIENT, payload })).toEqual({
      ...initialState,
      selectedIngredients: [...initialState.selectedIngredients, payload],
    });
  });

  it("should SELECT_BUN", () => {
    const payload = {};
    expect(reducer(initialState, { type: SELECT_BUN, payload })).toEqual({
      ...initialState,
      selectedBun: payload,
    });
  });

  it("should DELETE_INGREDIENT", () => {
    const payload = "test";
    expect(reducer(initialState, { type: DELETE_INGREDIENT, payload })).toEqual(
      {
        ...initialState,
        selectedIngredients: [{ id: "test" }].filter(
          ({ id }) => id !== payload
        ),
      }
    );
  });

  it("should UPDATE_INGREDIENTS", () => {
    const payload = [];
    expect(
      reducer(initialState, { type: UPDATE_INGREDIENTS, payload })
    ).toEqual({
      ...initialState,
      selectedIngredients: payload,
    });
  });

  it("should RESET_INGREDIENTS", () => {
    expect(reducer(initialState, { type: RESET_INGREDIENTS })).toEqual({
      ...initialState,
      selectedIngredients: [],
      selectedBun: { ...ingredient, id: "" },
    });
  });
});
