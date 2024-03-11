import React, { useEffect, useState } from 'react'
import {getAllArticles} from "../app"
import ArticleCard from './ArticleCard';
import {Link} from "react-router-dom"

import Loading from './Loading';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    SetLoading(true)
    getAllArticles().then((response) => {
      setArticles(response);
      SetLoading(false)
    });
  }, []);
 
  if (loading) {
    return <Loading />
  }

  return (
    <>
      <ul>  {  articles.map((article) => {
      
       return  <Link to={`/articles/${article.article_id}`}> <ArticleCard article={article} key={article.article_id}/></Link>  
        
      })}</ul>
    </>
  );
}

export default Articles
