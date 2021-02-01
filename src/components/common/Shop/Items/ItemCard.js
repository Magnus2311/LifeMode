import React from "react";
import "../../../../css/shopItems.css";
import { Button } from "react-bootstrap";
import { Translator } from "../../../../services/languages/Laguage";
import { handleItemClick } from "../../../../services/shop/shopItem/shopItem";
import { useHistory } from "react-router";

const ItemCard = (props) => {
  const { handleClick } = props;
  const { image, name, id } = props.item;
  const history = useHistory();

  const handleImageClick = (event) => {
    handleItemClick(event, history);
  };

  return (
    <>
      <div className="itemCard" onClick={handleClick} data-id={id}>
        <div className="itemCard_image">
          <img
            className="itemCard_image"
            src={image}
            alt=""
            data-id={props.item.id}
            onClick={handleImageClick}
          ></img>
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
