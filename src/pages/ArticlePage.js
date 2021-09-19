import React from "react";
import { useParams } from "react-router";
import ArticleList from "../components/ArticleList";
import articleContent from "./article-content";
import NotFoundPage from "./NotFoundPage";

function ArticlePage() {
  const params = useParams();
  const article = articleContent.find(
    (article) => article.name === params.name
  );
  if (!article) {
    return <NotFoundPage />;
  }
  const otherArticles = articleContent.filter(
    (article) => article.name !== params.name
  );
  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      <h3>Other Articles:</h3>
      <ArticleList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;
