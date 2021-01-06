import React, { useState } from "react";
import { connect } from "react-redux";
import * as shopCategoryActions from "../../../redux/actions/shopActions";
import { Form, Button } from "react-bootstrap";
import { Translator } from "../../../services/languages/Laguage";
import ChoosePhotoInput from "../../common/ChoosePhotoInput";
import ChooseParentCategory from "../categories/ChooseParentCategory";
import FormText from "../../common/FormText";
import "../../../css/categories.css";

const defaultImgName = "Choose photo";

const emptyShopCategory = {
  name: "",
  image: "",
  imgName: defaultImgName,
  parentId: "",
};

const AddShopCategoryPage = (props) => {
  const { shopCategories, onAddShopCategory } = props;
  const [shopCategory, setShopCategory] = useState(emptyShopCategory);

  const handleChange = (event) => {
    setShopCategory({
      ...shopCategory,
      [event.target.name]: event.target.value,
    });
  };

  const handleImgChange = (event) => {
    let file = event.target.files[0];
    let imageSrc;
    if (file) {
      var reader = new FileReader();
      reader.onload = () => {
        imageSrc = reader.result;
        setShopCategory({
          ...shopCategory,
          image: imageSrc,
          imgName: file.name,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setShopCategory({ ...shopCategory, image: "imageSrc" });
      setShopCategory({ ...shopCategory, imgName: defaultImgName });
    }
  };

  const handleChoose = (shopCategoryId) => {
    setShopCategory({ ...shopCategory, parentId: shopCategoryId });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddShopCategory(shopCategory);
    setShopCategory(emptyShopCategory);
  };

  return (
    <Form className="add-form" onSubmit={handleSubmit}>
      <h1>
        <Translator getString="Add shop category" />
      </h1>

      <ChooseParentCategory
        handleChoose={handleChoose}
        canSelectMainCategory={true}
        categories={shopCategories}
      />

      <FormText
        label={<Translator getString="Name" />}
        type="text"
        name="name"
        placeholder="Enter shop category name"
        value={shopCategory.name}
        handleChange={handleChange}
      />

      <ChoosePhotoInput
        label={<Translator getString="Photo" />}
        name="image"
        imgName={shopCategory.imgName}
        imgSrc={shopCategory.image}
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
    shopCategories: state.shopCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddShopCategory: (shopCategory) => {
      dispatch(shopCategoryActions.saveShopCategory(shopCategory));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddShopCategoryPage);
