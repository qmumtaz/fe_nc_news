import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom';
import { getArticleById } from '../app';
import "../styling/singlearticle.css"
import Comments from './Comments';
import Loading from './Loading';

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticleById] = useState({})
  const [loading, SetLoading] = useState(true);


  useEffect(() => {
    SetLoading(true)
    getArticleById(article_id).then((response) => {
      setArticleById(response)
      SetLoading(false)
    })
  },[])

  if (loading) {
    return <Loading  />
  }

  
  return (
    <>
       <div className="article">
      <div className="article-header">
        <h1>{article.title}</h1>
        <p> {article.author}</p>
        <p> {article.topic}</p>
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
  <Comments articleId={article_id} />
    </>
  )
}

export default SingleArticle
