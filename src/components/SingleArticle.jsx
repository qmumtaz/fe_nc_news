import React, { useEffect, useState  } from 'react'
import { useParams } from 'react-router-dom';
import { getArticleById, patchArticleById } from '../app';
import "../styling/singlearticle.css"
import Comments from './Comments';
import Loading from './Loading';
import {Link} from "react-router-dom"
import { useNavigate  } from "react-router-dom";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';


function SingleArticle() {
  const { article_id } = useParams();
  const [article, setArticleById] = useState({})
  const [loading, SetLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [userVote, setUserVote] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    SetLoading(true)
    getArticleById(article_id).then((response) => {
      setArticleById(response)
      SetLoading(false)
    }).catch(() => {
      navigate("/errorpage", { state : {message : "bad articleid"}})
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
      setErr({err})
    })
   
  }



  if (loading) {
    return <Loading  />
  }
  return (

    <>
    <Container >
       <div className="singleArticle">
       <Typography variant="subtitle1" className='single-author'> {article.author}</Typography>
        <Typography variant="h1" className='single-title'>{article.title}</Typography>
      <span className='single-topic'  style={{ backgroundColor: article.topic === "cooking" ? 'green' : 'red' }}> {article.topic}</span>
      <div className="single-body"> 
          <Typography className='single-body'>{article.body}</Typography>
        <div className="single-image">
          <img src={article.article_img_url} alt="Article" />
        </div>

      </div>
      <div className="single-vote-up" >  
      <Button  disabled={userVote}  onClick={() => setUpVote( "up")}> <span className='up-arrow'>&#8593;</span></Button> 
        <Button  disabled={userVote}  onClick={() => setUpVote("down")}  
       ><span className='down-arrow'>&#8595;</span> </Button>{article.votes}
        </div>
    </div>
    <Link to={`/article/${article.article_id}/comments`} className='single-link'><Button className='single-postcomment'> Post New Comment </Button></Link>
         <Comments articleId={article_id} />
    </Container >
    </>
  )
}

export default SingleArticle
