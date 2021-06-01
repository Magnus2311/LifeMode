import * as actionTypes from "../actions/actionTypes";
import * as webApi from "../../api/knowledgeApi";
import { toast } from "react-toastify";

export function loadKnowledgeCategories() {
  return function (dispatch) {
    return webApi
      .getKnowledgeCategories()
      .then((knowledgeCategories) => {
        dispatch(loadKnowledgeCategoriesSuccess(knowledgeCategories));
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.REQUEST_LOAD_KNOWLEDGECATEGORIES_SUCCESS,
        });
        toast.error("Loading knowledge categories failed!");
        throw error;
      });
  };
}

export function loadKnowledgeCategoriesSuccess(knowledgeCategories) {
  return {
    type: actionTypes.LOAD_KNOWLEDGECATEGORIES_SUCCESS,
    knowledgeCategories,
  };
}

export function saveCategory(category) {
  return function (dispatch) {
    return webApi
      .saveCategory(category)
      .then((category) => {
        dispatch(saveCategorySuccess(category));
        toast.success("Knowledge category added successfully!");
      })
      .catch((error) => {
        toast.error("Adding knowledge category failed!");
        throw error;
      });
  };
}

export function saveCategorySuccess(category) {
  return { type: actionTypes.SAVE_KNOWLEDGECATEGORY_SUCCESS, category };
}
