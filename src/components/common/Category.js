import React from "react";
import { Card } from "react-bootstrap";
import { Translator } from "../../services/languages/Laguage";

const Category = (props) => {
  const { handleClick } = props;
  const { image, name, id } = props.category;

  return (
    <Card
      data-id={id}
      className="category-item text-center"
      onClick={handleClick}
    >
      <Card.Body>
        <Card.Img src={image}></Card.Img>
        <Card.Header>
          <Translator getString={name} />
        </Card.Header>
      </Card.Body>
    </Card>
  );
};

export default Category;
