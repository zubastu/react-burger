import { TIngredient } from "../types";

export const getIngredientsDetails = (
  ingredients: TIngredient[],
  ids: string[],
  status?: string
) => {
  const getOrderIngredients = () => {
    const orderIngredients: TIngredient[] = [];
    ids.forEach((id: string) => {
      ingredients.forEach((ingredient: TIngredient) => {
        if (id === ingredient._id) {
          orderIngredients.push(ingredient);
        }
      });
    });
    return orderIngredients;
  };

  const getOrderPrice = () => {
    return getOrderIngredients().reduce((previousValue, currentValue) => {
      return previousValue + currentValue.price;
    }, 0);
  };

  const getIngredientsImages = () => {
    return getOrderIngredients().map((i) => i.image_large);
  };

  const getOrderStatus = () =>
    status === "done"
      ? "Выполнен"
      : status === "pending"
      ? "Готовится"
      : "Отменён";

  const getOrderStatusColor = () => {
    if (status === "done") {
      return "text_color_success";
    } else if (status === "pending") {
      return "text_color_default";
    } else {
      return "text_color_error";
    }
  };
  return {
    getOrderPrice,
    getIngredientsImages,
    getOrderStatus,
    getOrderStatusColor,
  };
};
