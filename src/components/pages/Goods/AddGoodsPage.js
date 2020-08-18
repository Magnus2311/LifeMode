import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormText from "../../common/FormText";
import { connect } from "react-redux";
import * as goodsActions from "../../../redux/actions/goodsActions";

const AddGoodsPage = (props) => {
  const [good, setGood] = useState({
    name: "",
    carbohydrates: "",
    fats: "",
    calories: "",
    protein: "",
  });

  const handleChange = (event) => {
    setGood({ ...good, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddCourse(good);
  };

  return (
    <Form
      style={{ display: "grid", placeItems: "center" }}
      onSubmit={handleSubmit}
    >
      <h1>Add Goods</h1>
      <FormText
        label="Name"
        type="text"
        name="name"
        placeholder="Enter goods name"
        value={good.name}
        handleChange={handleChange}
      />
      <FormText
        label="Carbohydrates"
        type="text"
        name="carbohydrates"
        placeholder="Enter carbohydrates"
        value={good.carbohydrates}
        handleChange={handleChange}
      />
      <FormText
        label="Fats"
        type="text"
        name="fats"
        placeholder="Enter fats"
        value={good.fats}
        handleChange={handleChange}
      />
      <FormText
        label="Calories"
        type="text"
        name="calories"
        placeholder="Enter calories"
        value={good.calories}
        handleChange={handleChange}
      />
      <FormText
        label="Protein"
        type="text"
        name="protein"
        placeholder="Enter protein"
        value={good.protein}
        handleChange={handleChange}
      />
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    goods: state.goods,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCourse: (goods) => {
      dispatch(goodsActions.saveGoods(goods));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddGoodsPage);
