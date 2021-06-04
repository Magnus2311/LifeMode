import React, { useState } from "react";
import { connect } from "react-redux";
import * as articleActions from "../../../redux/actions/acticleActions";
import { Form, Button } from "react-bootstrap";
import { Translator } from "../../../services/languages/Laguage";
import ChoosePhotoInput from "../../common/ChoosePhotoInput";
import ChooseParentCategory from "../categories/ChooseParentCategory";
import FormText from "../../common/FormText";

const defaultImgName = "Choose photo";

const AddArticle = (props) => {
  const emptyArticle = {
    name: "",
    description: "",
    image: "",
    imgName: defaultImgName,
    content: "",
  };

  const { knowledgeCategories, onAddArticle } = props;
  const [article, setArticle] = useState(emptyArticle);

  const handleChange = (event) => {
    setArticle({ ...article, [event.target.name]: event.target.value });
  };
  const handleImgChange = (event) => {
    let file = event.target.files[0];
    let imageSrc;
    if (file) {
      var reader = new FileReader();
      reader.onload = () => {
        imageSrc = reader.result;
        setArticle({
          ...article,
          image: imageSrc,
          imgName: file.name,
        });
      };
      reader.readAsDataURL(file);
    } else {
      setArticle({ ...article, image: "imageSrc" });
      setArticle({ ...article, imgName: defaultImgName });
    }
  };

  const handleChoose = (knowledgeCategoryId) => {
    setArticle({ ...article, parentId: knowledgeCategoryId });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddArticle(article);
    setArticle(emptyArticle);
  };
  return (
    <Form className="add-form" onSubmit={handleSubmit}>
      <h1>
        <Translator getString="Add article" />
      </h1>

      <ChooseParentCategory
        handleChoose={handleChoose}
        canSelectMainCategory={true}
        categories={knowledgeCategories}
      />

      <FormText
        label={<Translator getString="Name" />}
        type="text"
        name="name"
        placeholder="Enter article name"
        value={article.name}
        handleChange={handleChange}
      />

      <FormText
        label={<Translator getString="Description" />}
        type="text"
        name="description"
        placeholder="Enter article description"
        value={article.description}
        handleChange={handleChange}
      />

      <ChoosePhotoInput
        label={<Translator getString="Photo" />}
        name="image"
        imgName={article.imgName}
        imgSrc={article.image}
        handleChange={handleImgChange}
      />

      <FormText
        label={<Translator getString="Content" />}
        type="text"
        name="content"
        placeholder="Enter article content"
        value={article.content}
        handleChange={handleChange}
      />

      <Button variant="primary" type="submit">
        <Translator getString="Add" />
      </Button>
    </Form>
  );
};

const mapsStateToProps = (state) => {
  return {
    knowledgeCategories: state.knowledgeCategories,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onAddArticle: (article) => {
      dispatch(articleActions.saveArticle(article));
    },
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(AddArticle);
