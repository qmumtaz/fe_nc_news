import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom';
import { getArticleById } from '../app';
import "../styling/singlearticle.css"

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticleById] = useState({})


  useEffect(() => {
    getArticleById(article_id).then((response) => {
      setArticleById(response)
    })
  },[])


  
  return (
    <>
       <div className="article">
      <div className="article-header">
        <h1>{article.title}</h1>
        <p>Author: {article.author}</p>
        <p>Topic: {article.topic}</p>
      </div>
      <div className="article-body">
        <div className="article-image">
          <img src={article.article_img_url} alt="Article" />
        </div>
        <div className="article-text">
          <p>{article.body}</p>
        </div>
      </div>
    </div>
  
  
    </>
  )
}

export default SingleArticle
