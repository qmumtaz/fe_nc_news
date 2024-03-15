import React, { useState , useEffect } from 'react'
import { getAllArticles } from '../app';
import ArticleCard from './ArticleCard';
import "../styling/articlecard.css"
import Loading from './Loading';

import {Link} from "react-router-dom"

function TopicArticle({topic}) {
    const [article,setArticles] = useState([])
    const [loading, SetLoading] = useState(true);
    
    useEffect(() => {
      SetLoading(true)
        getAllArticles().then((response) => { 
          SetLoading(false)   
        const filtered =  response.filter((filteredArticles) => {
           return filteredArticles.topic === topic;
          })

          setArticles(filtered)
        });
      }, [topic]);

  if (loading) {
        return <Loading />
  }

  return (
    <div>
        <ul>
            {article.map((article) => {
                return <Link to={`/articles/${article.article_id}`}> <ArticleCard article={article} key={article.article_id} /> </ Link>
            })}
        </ul>
    </div>
  )
}

export default TopicArticle
