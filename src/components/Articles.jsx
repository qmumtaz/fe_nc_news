import React, { useEffect, useState } from 'react'
import getAllArticles from "../app"
import ArticleCard from './ArticleCard';

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((response) => {
      setArticles(response);
    });
  }, []);
  console.log(articles, "this is the articles");

  return (
    <>
      <ul>  {  articles.map((article) => {
       return <ArticleCard article={article} key={article.article_id}/>

      })}</ul>
    </>
  );
}

export default Articles
