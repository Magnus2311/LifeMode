import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
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
              <Col xl={6} md={6} lg={6} sm={6} xs={6}>
                <Card.Text>
                  {<Translator getString="Carbohydrates" />}
                  <Card.Text>{carbohydrates}</Card.Text>
                </Card.Text>
              </Col>
              <Col xl={6} md={6} lg={6} sm={6} xs={6}>
                <Card.Text>
                  {<Translator getString="Fats" />}
                  <Card.Text>{fats}</Card.Text>
                </Card.Text>
              </Col>
              <Col xl={6} md={6} lg={6} sm={6} xs={6}>
                <Card.Text>
                  {<Translator getString="Calories" />}
                  <Card.Text>{calories}</Card.Text>
                </Card.Text>
              </Col>
              <Col xl={6} md={6} lg={6} sm={6} xs={6}>
                <Card.Text>
                  {<Translator getString="Proteins" />}
                  <Card.Text>{protein}</Card.Text>
                </Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductPreview;
