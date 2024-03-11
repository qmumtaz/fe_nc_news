import React from 'react'
import "../styling/commentcard.css"
import SortDateBy from '../utils/sortDate'

function CommentCard({comment}) {

  
  return (
    <div>
      <div className="comment-card">
      <div className="comment-author">{comment.author}  <div className='comment-date'>{SortDateBy(comment.created_at)}</div> </div>
      <div className="comment-body"> {comment.body}</div>
      
      <div className="comment-votes">  <button><span>&#8593;</span></button>  {comment.votes}  </div>
      
    </div>
    </div>
  )
}

export default CommentCard
