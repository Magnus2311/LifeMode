import React from "react";
import "../../../../css/cart.css";

const QuantityControl = ({
  quantity,
  handleIncrease,
  handleDecrease,
  handleInputChange,
  hanldeOnBlur,
}) => {
  return (
    <>
      <div style={{ float: "left" }}>
        <img
          className="quantityImage"
          src={`/images/shoppingCart/plus.svg`}
          alt=""
          onClick={handleIncrease}
        />
      </div>
      <div style={{ float: "left" }}>
        <input
          type="text"
          name="name"
          onBlur={hanldeOnBlur}
          className="quantityInput"
          value={quantity}
          onChange={handleInputChange}
        />
      </div>
      <div style={{ float: "left" }}>
        <img
          className="quantityImage"
          src={`/images/shoppingCart/minus.svg`}
          onClick={handleDecrease}
          alt=""
        />
      </div>
    </>
  );
};

export default QuantityControl;
