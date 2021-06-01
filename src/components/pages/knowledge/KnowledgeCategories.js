import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import * as knowledgeCategoryActions from "../../../redux/actions/knowledgeActions";
import "../../../css/categories.css";
import ShopSubCategory from "../../common/Shop/ShopSubCategory";
import { handleKnowledgeCategoryClick } from "../../../services/knowledge/knowledge";

const KnowledgeCategories = (props) => {
  const { knowledgeCategories, onLoadKnowledgeCategories } = props;
  let { knowledgeCategoryId } = props.match.params;

  useEffect(() => {
    onLoadKnowledgeCategories();
  }, []);

  const handleCategoryChoose = (event) => {
    handleKnowledgeCategoryClick(event, props.history);
  };
  return (
    <>
      {knowledgeCategories
        .filter((category) => !category.parentId)
        .map((category) => {
          return (
            <div
              className="container"
              style={{ display: "flow-root", marginTop: "20px" }}
            >
              <div>
                <Form.Label style={{ fontSize: "25px", fontWeight: "bold" }}>
                  {category.name}
                </Form.Label>
              </div>
              <div className="shopCategories-list-container" key={category.Id}>
                {category.subCategories.map((subCategory) => {
                  return (
                    <ShopSubCategory
                      name="subCategory"
                      key={subCategory.id}
                      category={subCategory}
                      handleClick={handleCategoryChoose}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    knowledgeCategories: state.knowledgeCategories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadKnowledgeCategories: (knowledgeCategoryId) => {
      dispatch(
        knowledgeCategoryActions.loadKnowledgeCategories(knowledgeCategoryId)
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KnowledgeCategories);
