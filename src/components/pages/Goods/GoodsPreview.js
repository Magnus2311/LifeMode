import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const GoodsPreview = (props) => {
  const { goods } = props;

  return (
    <>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>{goods.name}</Card.Title>
          <Container fluid>
            <Row>
              <Col>
                <Card.Text>{goods.carbohydrates}</Card.Text>
              </Col>
              <Col>
                <Card.Text>{goods.fats}</Card.Text>
              </Col>
              <Col>
                <Card.Text>{goods.calories}</Card.Text>
              </Col>
              <Col>
                <Card.Text>{goods.protein}</Card.Text>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default GoodsPreview;
