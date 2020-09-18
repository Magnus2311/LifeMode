import React from "react";
import { Card } from "react-bootstrap";
import { Translator } from "../../../services/languages/Laguage";
import { Link } from "react-router-dom";

const Category = (props) => {
  const { handleClick } = props;
  const { image, name, id, subCategories } = props.category;

  return (
    // <Card
    //   data-id={id}
    //   className="category-item text-center"
    //   onClick={handleClick}
    // >
    //   <Card.Body>
    //     <Card.Img src={image}></Card.Img>
    //     <Card.Header>
    //       <Translator getString={name} />
    //     </Card.Header>
    //   </Card.Body>
    // </Card>
    <div className="category">
      <div className="rank">{id}</div>
      <div className="front">
        <img className="thumbnail" src={image} alt="" />
        <h3 className="name">{<Translator getString={name} />}</h3>
        <div className="stats">
          <p className="subcategories-count">{subCategories.length}</p>
          <div className="subcategories">
            {subCategories[0] && <img src={subCategories[0].image} alt="" />}
            {subCategories[1] && <img src={subCategories[1].image} alt="" />}
            {subCategories[2] && <img src={subCategories[2].image} alt="" />}
          </div>
        </div>
      </div>

      <div className="back">
        <div className="category-info">
          <p className="product-info">
            <span>750</span>
          </p>
          <p className="product-info">
            <span>750</span>
          </p>
        </div>
        <div className="btn btn-primary btn-xl" onClick={handleClick} />
        <div className="subcategories-back">
          <div className="subcategory">
            <p className="name"></p>
            <p className="number"></p>
          </div>
          <div className="subcategory">
            <p className="name"></p>
            <p className="number"></p>
          </div>
          <div className="subcategory">
            <p className="name"></p>
            <p className="number"></p>
          </div>
        </div>
      </div>

      <div className="background"></div>
    </div>
  );
};

export default Category;
