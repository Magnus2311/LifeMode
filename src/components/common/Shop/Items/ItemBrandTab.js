import React from "react";
import "../../../../css/shopItems.css";

const ItemBrandTab = (props) => {
  const { shopItem } = props;

  return (
    <>
      <div>
        <div style={{ margin: "50px" }}>
          <h4>{shopItem?.brand?.name}</h4>
          <hr />
        </div>
        <div className="center">
          <p>{shopItem?.brand?.description}</p>
        </div>
      </div>
    </>
  );
};
export default ItemBrandTab;
