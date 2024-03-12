import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom';
import { getArticleById } from '../app';
import "../styling/singlearticle.css"
import Comments from './Comments';
import Loading from './Loading';
import {Link} from "react-router-dom"

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
       <div className="singleArticle">
       <p className='single-author'> {article.author}</p>
        <h1 className='single-title'>{article.title}</h1>
      <span className='single-topic'> {article.topic}</span>
      <div className="single-body"> 
          <p className='single-body'>{article.body}</p>
        <div className="single-image">
          <img src={article.article_img_url} alt="Article" />
        </div>
       
      </div>
    </div>
    <Link to={`/article/${article.article_id}/comments`} className='single-link'><button className='single-postcomment'> Post New Comment </button></Link>
         <Comments articleId={article_id} />
    </>
  )
}

export default SingleArticle
