import React from 'react'
import "../styling/articlecard.css"

function ArticleCard({article}) {

  const dateObject = new Date(article.created_at);

  const formattedDate = dateObject.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZoneName: 'short',
  });

  return (
    <>
      <div className="article-card">
      <div className="author">{article.author}</div>
      <div className="title"> {article.title}</div>
      <div className="topic"> Topic : {article.topic}</div>
      <div className="topic"> Comments : {article.comment_count}</div>
      <div className="topic">{  formattedDate}</div>
    </div>
    </>
  )
}

export default ArticleCard
