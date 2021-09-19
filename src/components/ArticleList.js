import React from "react";
import { Link } from "react-router-dom";

function ArticleList({ articles }) {
  return (
    <>
      {articles.map((article, key) => (
        <Link
          to={`/article/${article.name}`}
          className="article-list-item"
          key={key}
        >
          <h3>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
}

export default ArticleList;
