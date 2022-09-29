import React from "react";
import materialItemStyles from "./MaterialItem.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
const MaterialItem = ({ material }) => {
  const { name, image, price } = material;
  console.log(material);
  return (
    <div className={materialItemStyles.material}>
      <img src={image} alt={name} />
      <div className={`${materialItemStyles.material__price} mt-1 mb-1`}>
        <p className="text text_type_digits-default">{price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <p
        className={`${materialItemStyles.material__name} text text_type_main-small`}
      >
        {name}
      </p>
    </div>
  );
};

export default MaterialItem;
