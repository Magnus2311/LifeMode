import React from "react";
import { handleKnowledgeCategoryClick } from "../../../services/knowledge/article";
import { useHistory } from "react-router";
import "../../../css/articleList.css";

const ArticleCard = (props) => {
  const { image, name, id, description } = props.item;
  const history = useHistory();

  const handleImageClick = (event) => {
    handleKnowledgeCategoryClick(event, history);
  };

  return (
    <>
      <div onClick={handleImageClick} data-id={id} className="articleCard">
        <img
          alt="Avatar"
          src={image}
          className="articleCard_image"
          data-id={props.item.id}
          onClick={handleImageClick}
        />
        <div class="articlecontainer">
          <h6>
            <b>{name}</b>
          </h6>
          <p style={{ color: "#808080" }}>{description}</p>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
