import React from 'react'
import "../styling/articlecard.css"
import SortDateBy from '../utils/sortDate'
import { FaCommentAlt } from "react-icons/fa";



function ArticleCard({article}) {


  return (
    <>
      <div className="article-card">
      <div className="article-author">{article.author} <div className="article-date">{  SortDateBy(article.created_at) }</div></div>
      <div className="article-title"> {article.title}</div>
      <div className="topic"> {article.topic}</div>
      <div className="article-comment"> <FaCommentAlt  className='article-icon' /> <span className='article-counter'>{article.comment_count}</span> </div>
      
    </div>
    </>
  )
}

export default ArticleCard
