import React from "react";
import "../../../../css/shopItems.css";
import { Translator } from "../../../../services/languages/Laguage";

const ItemUsageTab = (props) => {
  const { shopItem } = props;

  return (
    <>
      <div>
        <div style={{ margin: "50px" }}>
          <h4>{<Translator getString="How to use" />}</h4>
          <hr />
        </div>
        <div className="center">
          <p>{shopItem.usage}</p>
        </div>
      </div>
    </>
  );
};

export default ItemUsageTab;
