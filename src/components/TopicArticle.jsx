import React, { useState , useEffect } from 'react'
import { getAllArticles } from '../app';
import ArticleCard from './ArticleCard';
import "../styling/articlecard.css"

function TopicArticle({topic}) {
    const [article,setArticles] = useState([])
    
    useEffect(() => {
      
        getAllArticles().then((response) => {    
        const filtered =  response.filter((filteredArticles) => {
           return filteredArticles.topic === topic;
          })
          setArticles(filtered)
        });
      }, [topic]);


  return (
    <div>
        <ul>
            {article.map((article) => {
                return <ArticleCard article={article} key={article.article_id} />
            })}
        </ul>
    </div>
  )
}

export default TopicArticle