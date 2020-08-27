import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import FormText from "../../common/FormText";
import { connect } from "react-redux";
import * as productsActions from "../../../redux/actions/productsActions";
import ChoosePhotoInput from "../../common/ChoosePhotoInput";
import { Translator } from "../../../services/languages/Laguage";

const defaultImgName = "Choose photo";

const emptyProduct = {
  name: "",
  carbohydrates: "",
  fats: "",
  calories: "",
  protein: "",
  image: "",
  imgName: "Choose photo",
};

const AddProductPage = (props) => {
  const [product, setProduct] = useState(emptyProduct);

  const handleChange = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleImgChange = (event) => {
    let file = event.target.files[0];
    let imageSrc;
    if (file) {
      var reader = new FileReader();
      reader.onload = () => {
        imageSrc = reader.result;
        setProduct({
          ...product,
          image: imageSrc,
          imgName: file.name,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setProduct({ ...product, image: "imageSrc" });
      setProduct({ ...product, imgName: defaultImgName });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddProduct(product);
    setProduct(emptyProduct);
  };

  return (
    <Col>
      <Form onSubmit={handleSubmit}>
        <h1>
          <Translator getString="Add Product" />
        </h1>
        <FormText
          label={<Translator getString="Name" />}
          type="text"
          name="name"
          placeholder="Enter product name"
          value={product.name}
          handleChange={handleChange}
        />

        <ChoosePhotoInput
          label={<Translator getString="Photo" />}
          name="image"
          imgName={product.imgName}
          imgSrc={product.image}
          handleChange={handleImgChange}
        />

        <FormText
          label={<Translator getString="Carbohydrates" />}
          type="text"
          name="carbohydrates"
          placeholder="Enter carbohydrates"
          value={product.carbohydrates}
          handleChange={handleChange}
        />
        <FormText
          label={<Translator getString="Fats" />}
          type="text"
          name="fats"
          placeholder="Enter fats"
          value={product.fats}
          handleChange={handleChange}
        />
        <FormText
          label={<Translator getString="Calories" />}
          type="text"
          name="calories"
          placeholder="Enter calories"
          value={product.calories}
          handleChange={handleChange}
        />
        <FormText
          label={<Translator getString="Proteins" />}
          type="text"
          name="protein"
          placeholder="Enter protein"
          value={product.protein}
          handleChange={handleChange}
        />
        <Button variant="primary" type="submit">
          <Translator getString="Add" />
        </Button>
      </Form>
    </Col>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (product) => {
      dispatch(productsActions.saveProduct(product));
    },
  };
};

export default connect(mapDispatchToProps)(AddProductPage);
