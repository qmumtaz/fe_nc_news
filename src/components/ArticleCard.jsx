import React from 'react'
import "../styling/articlecard.css"
import SortDateBy from '../utils/sortDate'
import { FaCommentAlt } from "react-icons/fa";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import MessageIcon from '@mui/icons-material/Message';

function ArticleCard({article}) {


  return (
    <>
      <Card  className="article-card">
      <Typography  className="article-author">{article.author} <div className="article-date">{  SortDateBy(article.created_at) }</div></Typography >
      <Typography className="article-title"> {article.title}</Typography>
      <div className="topic"> {article.topic}</div>
      <div className="article-comment"> <MessageIcon  className='article-icon' /> <span className='article-counter'>{article.comment_count}</span> </div>
      
    </Card >
    </>
  )
}

export default ArticleCard
