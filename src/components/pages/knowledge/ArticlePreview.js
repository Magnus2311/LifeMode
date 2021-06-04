import React, { useEffect } from "react";
import * as articleActions from "../../../redux/actions/acticleActions";
import { connect } from "react-redux";
import "../../../css/shopPreview.css";

const ArticlePreview = (props) => {
  const { articleId } = props.match.params;
  const { article, onLoadArticle } = props;

  useEffect(() => {
    onLoadArticle(articleId);
  }, []);

  return (
    <div>
      <p>{article.name}</p>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

const mapsDispatchToProps = (dispatch) => {
  return {
    onLoadArticle: (articleId) => {
      dispatch(articleActions.loadArticle(articleId));
    },
  };
};

const mapsStateToProps = (state) => {
  return {
    article: state.article,
  };
};

export default connect(mapsStateToProps, mapsDispatchToProps)(ArticlePreview);
