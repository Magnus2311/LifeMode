import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import FormText from "../../common/FormText";
import { connect } from "react-redux";
import * as goodsActions from "../../../redux/actions/goodsActions";
import ChoosePhotoInput from "../../common/ChoosePhotoInput";
import { Translator } from "../../../services/languages/Laguage";

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
        <h1>
          <Translator getString="Add Goods" />
        </h1>
        <FormText
          label={<Translator getString="Name" />}
          type="text"
          name="name"
          placeholder="Enter goods name"
          value={good.name}
          handleChange={handleChange}
        />

        <ChoosePhotoInput
          label={<Translator getString="Photo" />}
          name="image"
          imgName={good.imgName}
          imgSrc={good.image}
          handleChange={handleImgChange}
        />

        <FormText
          label={<Translator getString="Carbohydrates" />}
          type="text"
          name="carbohydrates"
          placeholder={<Translator getString="Enter carbohydrates" />}
          value={good.carbohydrates}
          handleChange={handleChange}
        />
        <FormText
          label={<Translator getString="Fats" />}
          type="text"
          name="fats"
          placeholder={<Translator getString="Enter fats" />}
          value={good.fats}
          handleChange={handleChange}
        />
        <FormText
          label={<Translator getString="Calories" />}
          type="text"
          name="calories"
          placeholder={<Translator getString="Enter calories" />}
          value={good.calories}
          handleChange={handleChange}
        />
        <FormText
          label={<Translator getString="Protein" />}
          type="text"
          name="protein"
          placeholder={<Translator getString="Enter protein" />}
          value={good.protein}
          handleChange={handleChange}
        />
        <Button variant="primary" type="submit">
          <Translator getString="Add" />
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
