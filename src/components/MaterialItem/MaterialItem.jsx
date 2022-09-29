import React from "react";

const MaterialItem = ({ material }) => {
  const { name, image } = material;
  console.log(material);
  return (
    <div>
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default MaterialItem;
