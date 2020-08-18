import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";
import * as goodsActions from "../../../redux/actions/goodsActions";
import GoodsPreview from "./GoodsPreview";
import { Container, Row, Col } from "react-bootstrap";

const GoodsListPage = (props) => {
  const { goods, onLoadGoods } = props;

  useEffect(onLoadGoods, []);

  return (
    <Container fluid>
      <Row>
        {goods.map((goods) => {
          return (
            <Col xs={12} sm={12} md={6} lg={6} xl={4}>
              <GoodsPreview key={goods.id} goods={goods} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadGoods: () => {
      dispatch(goodsActions.loadGoods());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GoodsListPage);
