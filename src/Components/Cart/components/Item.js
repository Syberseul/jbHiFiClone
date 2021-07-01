import React from "react";
import Amount from "./Amount";

function Item(props) {
  const { id, title, price, image, category, description } = props.item.toJS();
  return (
    <div>
      <Amount item={props.item} index={id - 1} />
      <p>{title}</p>
      <p>{price}</p>
      <img src={image} alt="" />
      <p>{category}</p>
      <p>{description}</p>
    </div>
  );
}

export default Item;
