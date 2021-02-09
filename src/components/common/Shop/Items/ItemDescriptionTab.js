import React, { useState } from "react";
import "../../../../css/shopItems.css";
import { Button } from "react-bootstrap";
import { Translator } from "../../../../services/languages/Laguage";
import StarRatings from "react-star-ratings";

const ItemDescriptionTab = (props) => {
  const { shopItem } = props;
  const [quantity, setQuantity] = useState(1);

  const handleDecreaseQuantity = () => {
    if (quantity > 0) setQuantity(quantity - 1);
  };
  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleInputQuantity = (event) => {
    setQuantity(parseInt(event.target.value));
  };

  const handleAddToCart = (event) => {};

  return (
    <>
      <div className="row center" style={{ margin: "30px" }}>
        <div className="leftElement center itemImagePriceDiv">
          <div>
            <img src={shopItem.image} alt="" className="shopItemImage" />
          </div>
          <div style={{ margin: "20px" }}>
            <h4>{shopItem.price} лв.</h4>
          </div>
        </div>
        <div className="rightElement itemDescription">
          <div>
            <h2>{shopItem.name}</h2>
          </div>
          <div>
            <p>{shopItem.description}</p>
          </div>
          <div
            className="rightElement"
            style={{
              display: "inline",
              margin: "10px",
              paddingTop: "50px",
            }}
          >
            <div className="center">
              <StarRatings
                rating={shopItem.rating}
                starDimension="30px"
                starRatedColor="#db3a2e"
                isSelectable={false}
                numberOfStars={5}
                name="rating"
              />
            </div>
            <div className="center">
              <Button
                className="button buttonQuantity"
                onClick={handleDecreaseQuantity}
              >
                -
              </Button>
              <input
                className="quantityInput"
                value={quantity}
                onChange={handleInputQuantity}
              ></input>
              <Button
                className="button buttonQuantity"
                onClick={handleIncreaseQuantity}
              >
                +
              </Button>
              <Button className="button" onClick={handleAddToCart}>
                <Translator getString="Add to cart" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDescriptionTab;
