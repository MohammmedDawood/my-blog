import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import AddCommentForm from "../components/AddCommentForm";
import ArticleList from "../components/ArticleList";
import CommentsList from "../components/CommentsList";
import UpvotesSection from "../components/UpvotesSection";
import articleContent from "./article-content";
import NotFoundPage from "./NotFoundPage";

function ArticlePage() {
  const params = useParams();

  const article = articleContent.find(
    (article) => article.name === params.name
  );

  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${params.name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [params.name]);

  if (!article) {
    return <NotFoundPage />;
  }
  const otherArticles = articleContent.filter(
    (article) => article.name !== params.name
  );
  return (
    <>
      <h1>{article.title}</h1>
      <UpvotesSection
        articleName={params.name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}

      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm
        articleName={params.name}
        setArticleInfo={setArticleInfo}
      />
      <h3>Other Articles:</h3>
      <ArticleList articles={otherArticles} />
    </>
  );
}

export default ArticlePage;
