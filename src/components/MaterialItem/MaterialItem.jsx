import React, { useState, useEffect } from "react";
import materialItemStyles from "./MaterialItem.module.css";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const MaterialItem = ({
  material,
  onSelect,
  selectedBun = null,
  selectedIngredients = null,
}) => {
  const { name, image, price } = material;
  const [counter, setCounter] = useState(0);

  const findCountMaterials = (materials) => {
    const materialsArr = materials.filter((item) => item.name === name);
    return materialsArr.length;
  };

  useEffect(() => {
    selectedBun && selectedBun.name === name ? setCounter(1) : setCounter(0);
  }, [selectedBun]);

  useEffect(() => {
    selectedIngredients && setCounter(findCountMaterials(selectedIngredients));
  }, [selectedIngredients]);

  return (
    <div
      className={materialItemStyles.material}
      onClick={() => {
        onSelect(material);
      }}
    >
      {counter > 0 && (
        <Counter
          count={counter}
          size="small"
          extraClass={materialItemStyles.material__counter}
        />
      )}
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
