import React from "react";
import { Col, Card } from "react-bootstrap";
import { Translator } from "../../services/languages/Laguage";

const Category = (props) => {
  const { category, handleClick } = props;
  const { image, name } = category;

  return (
    <Col>
      <Card className="category-item text-center" onClick={handleClick}>
        <Card.Body>
          <Card.Img src={image}></Card.Img>
          <Card.Header>
            <Translator getString={name} />
          </Card.Header>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Category;
