import React from "react";
import { Translator } from "../../../services/languages/Laguage";

const ShopSubCategory = (props) => {
  const { handleClick } = props;
  const { image, name, id } = props.category;

  return (
    <>
      <div class="card">
        <div class="card_image">
          <img src={image}></img>
        </div>
        <div class="card_title title-black">
          <p>{props.category.name}</p>
        </div>
      </div>
    </>
  );
};

export default ShopSubCategory;
