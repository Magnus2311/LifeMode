import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const GoodsPreview = (props) => {
  const { name, carbohydrates, fats, calories, protein, image } = props.goods;

  return (
    <>
      <Col xs={12} sm={12} md={6} lg={6} xl={4}>
        <Card style={{ margin: "10px", padding: "0" }}>
          <Card.Body>
            <Card.Header as="h5">{name}</Card.Header>
            <Card.Img
              variant="bottom"
              src={image}
              style={{ marginBottom: "10px" }}
            />
            <Container fluid className="text-center">
              <Row>
                <Col>
                  <Card.Text>{"Carbs"}</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{"Fats"}</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{"Calories"}</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{"Proteins"}</Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text>{carbohydrates}</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{fats}</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{calories}</Card.Text>
                </Col>
                <Col>
                  <Card.Text>{protein}</Card.Text>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default GoodsPreview;
