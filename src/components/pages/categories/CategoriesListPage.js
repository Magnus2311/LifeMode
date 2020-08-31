import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as categoryActions from "../../../redux/actions/categoryActions";
import Category from "../../common/Category";
import "../../../css/categories.css";
import AutoCompleteBox from "../../common/AutoCompleteBox";
import { Translator } from "../../../services/languages/Laguage";

const CategoriesListPage = (props) => {
  const { categories, onLoadCategories } = props;
  // eslint-disable-next-line
  const [searchText, setSearchtext] = useState("");
  const [shownCategories, setShownCategories] = useState(categories);

  useEffect(onLoadCategories, []);

  const handleCategoryChoose = (event) => {
    setSearchtext(event.target.textContent);
  };

  const handleSerachTextChanged = (searchText) => {
    setSearchtext(searchText);
    setShownCategories(
      categories.filter((category) => {
        return category.name.includes(searchText);
      })
    );
  };

  return (
    <>
      <AutoCompleteBox
        placeholder="Choose category"
        handleSubmit={handleCategoryChoose}
        handleChange={handleSerachTextChanged}
        data={categories.map((category) => {
          return category.name;
        })}
      />
      <div className="categories-container">
        {shownCategories.length === 0
          ? categories.map((category) => {
              return <Category key={category.id} category={category} />;
            })
          : shownCategories.map((category) => {
              return <Category key={category.id} category={category} />;
            })}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadCategories: () => {
      dispatch(categoryActions.loadCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesListPage);
