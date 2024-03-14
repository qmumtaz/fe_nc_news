import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom';
import { getArticleById, patchArticleById } from '../app';
import "../styling/singlearticle.css"
import Comments from './Comments';
import Loading from './Loading';
import {Link} from "react-router-dom"

function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticleById] = useState({})
  const [loading, SetLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [userVote, setUserVote] = useState(null);
  

  useEffect(() => {
    SetLoading(true)
    getArticleById(article_id).then((response) => {
      setArticleById(response)
      SetLoading(false)
    })
  },[])
  

  const setUpVote = ( articleVote )=> {
    if (!userVote) {
      setUserVote(true)
    }
    
   const patchArticle = {
    inc_votes : articleVote === "up" ? 1 : (articleVote === "down" ? -1 : 0 )
   }
   
   setArticleById((prevArticle) => {
       return {...prevArticle , votes : prevArticle.votes + patchArticle.inc_votes }
   })

    patchArticleById(article_id, patchArticle).then(() => {
      setUserVote('up');

    }).catch((err) => {
      setArticleById((prevArticle) => ({
        ...prevArticle,
        votes: prevArticle.votes - patchArticle.inc_votes 
      }));
      setErr('Something went wrong, please try again.')
    })
   
  }


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
      <div className="single-vote-up" >  
      <button  disabled={userVote}  onClick={() => setUpVote( "up")}> <span className='up-arrow'>&#8593;</span></button> 
        <button  disabled={userVote}  onClick={() => setUpVote("down")}  ><span className='down-arrow'>&#8595;</span> </button>   {article.votes}  </div>
    </div>
    <Link to={`/article/${article.article_id}/comments`} className='single-link'><button className='single-postcomment'> Post New Comment </button></Link>
         <Comments articleId={article_id} />
    </>
  )
}

export default SingleArticle
