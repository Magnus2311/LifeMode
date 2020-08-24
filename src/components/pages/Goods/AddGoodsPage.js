import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import FormText from "../../common/FormText";
import { connect } from "react-redux";
import * as goodsActions from "../../../redux/actions/goodsActions";
import ChoosePhotoInput from "../../common/ChoosePhotoInput";
import { toast } from "react-toastify";

const defaultImgName = "Choose photo";
let file;

const emptyGood = {
  name: "",
  carbohydrates: "",
  fats: "",
  calories: "",
  protein: "",
  image: "",
  imgName: "Choose photo",
};

const AddGoodsPage = (props) => {
  const [good, setGood] = useState(emptyGood);

  const handleChange = (event) => {
    setGood({ ...good, [event.target.name]: event.target.value });
  };

  const handleImgChange = (event) => {
    file = event.target.files[0];
    let imageSrc;
    if (file) {
      var reader = new FileReader();
      reader.onload = () => {
        imageSrc = reader.result;
        setGood({
          ...good,
          image: imageSrc,
          imgName: file.name,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setGood({ ...good, image: "imageSrc" });
      setGood({ ...good, imgName: defaultImgName });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddCourse(good);
    setGood(emptyGood);
  };

  return (
    <Col>
      <Form onSubmit={handleSubmit}>
        <h1>Add Goods</h1>
        <FormText
          label="Name"
          type="text"
          name="name"
          placeholder="Enter goods name"
          value={good.name}
          handleChange={handleChange}
        />

        <ChoosePhotoInput
          label="Photo"
          name="image"
          imgName={good.imgName}
          imgSrc={good.image}
          handleChange={handleImgChange}
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
    </Col>
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
