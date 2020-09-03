import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import { Translator } from "../../../services/languages/Laguage";

const ProductPreview = (props) => {
  const { name, carbohydrates, fats, calories, protein, image } = props.product;

  return (
    <>
      <Card className="product-item">
        <Card.Body>
          <Card.Header className="text-center card-header" as="h5">
            {<Translator getString={name} />}
          </Card.Header>
          <Card.Img
            variant="bottom"
            src={image}
            style={{ marginBottom: "10px" }}
          />
          <Container fluid className="text-center products-info">
            <Row>
              <div className="col-6">
                <div>{<Translator getString="Carbohydrates" />}</div>
                <div>{carbohydrates}</div>
              </div>
              <div className="col-6">
                <div>{<Translator getString="Fats" />}</div>
                <div>{fats}</div>
              </div>
              <div className="col-6">
                <div>{<Translator getString="Calories" />}</div>
                <div>{calories}</div>
              </div>
              <div className="col-6">
                <div>{<Translator getString="Proteins" />}</div>
                <div>{protein}</div>
              </div>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductPreview;
