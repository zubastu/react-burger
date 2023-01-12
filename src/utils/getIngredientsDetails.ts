import { TIngredient } from "../types";

type TSortedIngredient = {
  [key: string]: number;
};

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
  const getSortedIngredients = (arr: string[]) => {
    return arr.reduce((target: TSortedIngredient, key) => {
      target[key] = (target[key] || 0) + 1;
      return target;
    }, {});
  };

  const getSortedOrderIngredients = () => {
    const items = getSortedIngredients(ids);
    const result: {
      image: string;
      price: number;
      quantity: number;
      name: string;
    }[] = [];
    ingredients.forEach((i) => {
      if (items[i._id]) {
        result.push({
          image: i.image_large,
          price: i.price,
          quantity: items[i._id],
          name: i.name,
        });
      }
    });
    return result;
  };

  const getIngredientsImages = () => {
    return getOrderIngredients().map((i) => i.image_large);
  };

  return {
    getOrderPrice,
    getIngredientsImages,
    getOrderStatus,
    getOrderStatusColor,
    getSortedIngredients,
    getSortedOrderIngredients,
  };
};
