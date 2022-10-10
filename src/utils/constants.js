import PropTypes from "prop-types";

const BASE_URL = "https://norma.nomoreparties.space/";
export const INGREDIENTS_URL = `${BASE_URL}api/ingredients`;
export const ORDERS_URL = `${BASE_URL}api/orders`;
export const TYPE_BUN = "bun";
export const TYPE_SAUCE = "sauce";
export const TYPE_MAIN = "main";

export const reactModalRootElement = document.querySelector(".react-modals");

export const ANIMATION_TIME = 300;

export const modalRoot = document.getElementById("react-modals");

export const INGREDIENT_TYPES = PropTypes.shape({
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates: PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  image_mobile: PropTypes.string,
  image_large: PropTypes.string,
  __v: PropTypes.number,
});
