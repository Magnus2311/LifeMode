import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Translator } from "../../../services/languages/Laguage";
import * as shopItemActions from "../../../redux/actions/shopItemAction";
import * as brandActions from "../../../redux/actions/brandActions";
import ChooseParentCategory from "../categories/ChooseParentCategory";
import ChoosePhotoInput from "../../common/ChoosePhotoInput";
import FormText from "../../common/FormText";
import Combobox from "../../common/Combobox";
import { useEffect } from "react";

const defaultImgName = "Choose photo";
const emptyShopItem = {
  name: "",
  image: "",
  imgName: defaultImgName,
  description: "",
  usage: "",
  availableQuantity: "",
  price: "",
  brandId: "",
  shopCategoryId: "",
};
const AddShopItemPage = (props) => {
  const { shopItems, onAddShopItem } = props;
  const { shopCategories } = props;
  const { brands, onLoadBrands } = props;
  const [shopItem, setShopItem] = useState(emptyShopItem);
  useEffect(() => {
    onLoadBrands();
  }, []);

  const handleChoose = (categoryId) => {
    setShopItem({ ...shopItem, shopCategoryId: categoryId });
  };
  const handleChooseBrand = (itemId) => {
    setShopItem({ ...shopItem, brandId: itemId });
  };

  const handleChange = (event) => {
    setShopItem({ ...shopItem, [event.target.name]: event.target.value });
  };

  const handleImgChange = (event) => {
    let file = event.target.files[0];
    let imageSrc;
    if (file) {
      var reader = new FileReader();
      reader.onload = () => {
        imageSrc = reader.result;
        setShopItem({
          ...shopItem,
          image: imageSrc,
          imgName: file.name,
        });
      };
      reader.readAsDataURL(file);
    } else {
      shopItem({ ...shopItem, image: "imageSrc" });
      shopItem({ ...shopItem, imgName: defaultImgName });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddShopItem(shopItem);
    setShopItem(emptyShopItem);
  };
  return (
    <>
      <Form className="add-form" onSubmit={handleSubmit}>
        <h1>
          <Translator getString="Add shop item" />
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
          placeholder="Enter name"
          value={shopItem.name}
          handleChange={handleChange}
        />

        <FormText
          label={<Translator getString="Description" />}
          type="text"
          name="description"
          placeholder="Enter description"
          value={shopItem.description}
          handleChange={handleChange}
        />
        <FormText
          label={<Translator getString="Usage" />}
          type="text"
          name="usage"
          placeholder="Enter description - how to use "
          value={shopItem.usage}
          handleChange={handleChange}
        />

        <FormText
          label={<Translator getString="Price" />}
          type="text"
          name="price"
          placeholder="Enter price "
          value={shopItem.price}
          handleChange={handleChange}
        />
        <FormText
          label={<Translator getString="Quantity" />}
          type="text"
          name="availableQuantity"
          placeholder="Enter quantity "
          value={shopItem.availableQuantity}
          handleChange={handleChange}
        />

        <Combobox handleChoose={handleChooseBrand} items={brands} />

        <ChoosePhotoInput
          label={<Translator getString="Photo" />}
          name="image"
          imgName={shopItem.imgName}
          imgSrc={shopItem.image}
          handleChange={handleImgChange}
        />

        <Button variant="primary" type="submit">
          <Translator getString="Add" />
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    shopCategories: state.shopCategories,
    shopItems: state.shopItems,
    brands: state.brands,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddShopItem: (shopItem) => {
      dispatch(shopItemActions.saveShopItem(shopItem));
    },
    onLoadBrands: () => {
      dispatch(brandActions.loadBrands());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddShopItemPage);
