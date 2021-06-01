import * as actionTypes from "../actions/actionTypes";

export default function knowledgeReducers(knowledgeCategories = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_KNOWLEDGECATEGORIES_SUCCESS:
      return action.knowledgeCategories;
    case actionTypes.SAVE_KNOWLEDGECATEGORY_SUCCESS:
      return [...knowledgeCategories, { ...action.knowledgeCategories }];
    default:
      return knowledgeCategories;
  }
}
