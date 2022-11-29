import PropTypes from "prop-types";

const BASE_URL = "https://norma.nomoreparties.space/";
export const INGREDIENTS_URL = `${BASE_URL}api/ingredients`;
export const ORDERS_URL = `${BASE_URL}api/orders`;
export const FORGOT_PASS_URL = `${BASE_URL}api/password-reset`;
export const RESET_PASS_URL = `${BASE_URL}api/password-reset/reset`;
export const LOGIN_URL = `${BASE_URL}api/auth/login`;
export const REGISTER_URL = `${BASE_URL}api/auth/register`;
export const LOGOUT_URL = `${BASE_URL}api/auth/logout`;
export const REFRESH_TOKEN_URL = `${BASE_URL}api/auth/token`;
export const USER_INFO_URL = `${BASE_URL}api/auth/user`;

export const TYPE_BUN = "bun";
export const TYPE_SAUCE = "sauce";
export const TYPE_MAIN = "main";

export const reactModalRootElement = document.querySelector(".react-modals");

export const INGREDIENT_TYPES = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  image_mobile: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  __v: PropTypes.number.isRequired,
});
