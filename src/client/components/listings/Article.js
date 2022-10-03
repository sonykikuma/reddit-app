import React from "react";
import { Link } from "react-router-dom";

const Article = ({ thumbnail, title, sub, t3Id, numComments }) => {
  thumbnail =
    thumbnail === "default" || thumbnail === "self"
      ? "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg"
      : //"../../assets/images/no-image.png"
        thumbnail;

  return (
    <Link to={`/comments/${sub}/${t3Id}`}>
      <div className="article-wrapper">
        <div className="image">
          <img src={thumbnail} alt="" />
        </div>
        <div className="title">{title}</div>
        <div className="num-comments">{numComments} comments</div>
      </div>
    </Link>
  );
};

export default Article;
