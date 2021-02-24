import React, { useContext } from "react";
import "../../../../css/shopItems.css";
import { Button } from "react-bootstrap";
import { Translator } from "../../../../services/languages/Laguage";
import { handleItemClick } from "../../../../services/shop/shopItem/shopItem";
import { useHistory } from "react-router";
import { CartContext } from "../../../common/Contexts/CartContext";

const ItemCard = (props) => {
  const { handleClick } = props;
  const { addProduct, cartItems, increase } = useContext(CartContext);
  const { image, name, id } = props.item;
  const history = useHistory();

  const handleImageClick = (event) => {
    handleItemClick(event, history);
  };
  const isInCart = (id) => {
    return !!cartItems.find((item) => item.id === id);
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
            {isInCart(id) && (
              <Button
                variant="primary"
                type="submit"
                onClick={() => increase(props.item)}
              >
                <Translator getString="Add" />
              </Button>
            )}
            {!isInCart(id) && (
              <Button
                variant="primary"
                type="submit"
                onClick={() => addProduct(props.item, 1)}
              >
                <Translator getString="Add" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
