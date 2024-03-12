import React, { useState } from 'react'
import "../styling/commentcard.css"
import SortDateBy from '../utils/sortDate'

function CommentCard({comment, setUpVote}) {
 

  return (
    <div> 
      <div className="comment-card">
      <div className="comment-author">{comment.author}  <div className='comment-date'>{SortDateBy(comment.created_at)}</div> </div>
      <div className="comment-body"> {comment.body}</div>
      
      <div className="comment-votes">  <button onClick={() => setUpVote(comment.comment_id , 1)}><span className='up-arrow'>&#8593;</span></button> <button onClick={() => setUpVote(comment.comment_id , -1)}><span className='down-arrow'>&#8595;</span></button>   {comment.votes}  </div>
      
    </div>
    </div>
  )
}

export default CommentCard
