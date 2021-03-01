import React from "react";

const ShopSubCategory = (props) => {
  const { handleClick } = props;
  const { image, name, id } = props.category;

  return (
    <>
      <div className="card" onClick={handleClick} data-id={id}>
        <div className="card_image">
          <img src={image} alt=""></img>
        </div>
        <div className="card_title title-black">
          <p>{props.category.name}</p>
        </div>
      </div>
    </>
  );
};

export default ShopSubCategory;
