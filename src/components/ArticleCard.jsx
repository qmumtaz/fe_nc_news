import React from 'react'
import "../styling/articlecard.css"

function ArticleCard({article}) {

  return (
    <>
      <div className="article-card">
      <div className="author">{article.author}</div>
      <div className="title">{article.title}</div>
      <div className="topic">{article.topic}</div>
    </div>
    </>
  )
}

export default ArticleCard
