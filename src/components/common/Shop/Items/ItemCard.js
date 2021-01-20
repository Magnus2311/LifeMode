import React from "react";
import "../../../../css/shopItems.css";
import { Button } from "react-bootstrap";
import { Translator } from "../../../../services/languages/Laguage";

const ItemCard = (props) => {
  const { handleClick } = props;
  const { image, name, id } = props.item;

  return (
    <>
      <div className="itemCard" onClick={handleClick} data-id={id}>
        <div className="itemCard_image">
          <img className="itemCard_image" src={image} alt=""></img>
        </div>
        <div className="itemCard_title title-black">
          <p className="itemCardName">{name}</p>
          <div style={{ display: "grid" }}>
            {props.item.price} лв.
            <Button variant="primary" type="submit">
              <Translator getString="Add" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
