import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as articleActions from "../../../redux/actions/acticleActions";
import ArticleCard from "../../common/Knowledge/ArticleCard";
import InfiniteScroll from "react-infinite-scroll-component";
import "../../../css/shopItems.css";

const ArticlesList = (props) => {
  const { knowledgeCategoryId } = props.match.params;
  const { articles, onLoadArticles } = props;
  const { loadingArticles } = props;
  const { pageNumber } = props;

  useEffect(() => {
    // if (pageNumber === 1 && articles.length < 1) {
    onLoadArticles(knowledgeCategoryId, "1");
    // }
  }, []);

  const loadMore = () => {
    onLoadArticles(knowledgeCategoryId, pageNumber);
  };

  return (
    <>
      <InfiniteScroll
        style={{ width: "100%", height: "100%" }}
        dataLength={articles.length}
        next={loadMore}
        hasMore={!loadingArticles}
        scrollableTarget="root"
      ></InfiniteScroll>
      <div className="items-container">
        {articles &&
          articles.length > 0 &&
          articles.map((item) => {
            return <ArticleCard item={item} key={item.id} />;
          })}
      </div>
      {loadingArticles && (
        <p style={{ height: "50px" }}>Зареждане на повече елементи</p>
      )}
    </>
  );
};

const mapsStateToProps = (state) => {
  return {
    articles: state.articles,
    loadingArticles: state.loadingArticles,
    pageNumber: state.pageNumber,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onLoadArticles: (knowledgeCategoryId, pageNumber) => {
      dispatch(
        articleActions.loadArticlesByCategory(knowledgeCategoryId, pageNumber)
      );
    },
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ArticlesList);
