import React from "react";
import ArticleList from "../components/ArticleList";
import articleContent from "./article-content";

function ArticleListPage() {
  return (
    <>
      <h1>Article List</h1>
      <ArticleList articles={articleContent} />
    </>
  );
}

export default ArticleListPage;
