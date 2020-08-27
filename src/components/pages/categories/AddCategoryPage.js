import React, { useState } from "react";
import { connect } from "react-redux";
import * as categoryActions from "../../../redux/actions/categoryActions";
import { Form, Button } from "react-bootstrap";
import { Translator } from "../../../services/languages/Laguage";
import ChoosePhotoInput from "../../common/ChoosePhotoInput";
import ChooseParentCategory from "./ChooseParentCategory";
import FormText from "../../common/FormText";
import "../../../css/categories.css";

const defaultImgName = "Choose photo";

const emptyCategory = {
  name: "",
  image: "",
  imgName: "",
  parentId: "",
};

const AddCategoryPage = (props) => {
  const { categories, onAddCategory } = props;
  const [category, setCategory] = useState(emptyCategory);

  const handleChange = (event) => {
    setCategory({ ...category, [event.target.name]: event.target.value });
  };

  const handleImgChange = (event) => {
    let file = event.target.files[0];
    let imageSrc;
    if (file) {
      var reader = new FileReader();
      reader.onload = () => {
        imageSrc = reader.result;
        setCategory({
          ...category,
          image: imageSrc,
          imgName: file.name,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setCategory({ ...category, image: "imageSrc" });
      setCategory({ ...category, imgName: defaultImgName });
    }
  };

  const handleChoose = (categoryId) => {
    setCategory({ ...category, parentId: categoryId });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddCategory(category);
    setCategory(emptyCategory);
  };

  return (
    <Form className="add-form" onSubmit={handleSubmit}>
      <h1>
        <Translator getString="Add category" />
      </h1>

      <ChooseParentCategory
        handleChoose={handleChoose}
        categories={categories}
      />

      <FormText
        label={<Translator getString="Name" />}
        type="text"
        name="name"
        placeholder="Enter category name"
        value={category.name}
        handleChange={handleChange}
      />

      <ChoosePhotoInput
        label={<Translator getString="Photo" />}
        name="image"
        imgName={category.imgName}
        imgSrc={category.image}
        handleChange={handleImgChange}
      />

      <Button variant="primary" type="submit">
        <Translator getString="Add" />
      </Button>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddCategory: (category) => {
      dispatch(categoryActions.saveCategory(category));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryPage);
