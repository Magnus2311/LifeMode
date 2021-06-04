import { combineReducers } from "redux";

import products from "./productsReducers";
import categories from "./categoryReducers";
import loader from "./loaderReducers";
import shopCategories from "./shopReducers";
import shopItemsByCategory from "./shopItemsReducers";
import brands from "./brandsReducers";
import loadingShopItems from "./shopLoadingReducers";
import pageNumber from "./shopItemsPageNumber";
import shopItem from "./shopItemReducer";
import feedbacks from "./feedbackReducer";
import knowledgeCategories from "./knowledgeReducers";
import articles from "./articlesReducers";
import article from "./articleReducers";

const rootReducer = combineReducers({
  products,
  categories,
  loader,
  shopCategories,
  shopItemsByCategory,
  brands,
  loadingShopItems,
  pageNumber,
  shopItem,
  feedbacks,
  knowledgeCategories,
  articles,
  article,
});

export default rootReducer;
