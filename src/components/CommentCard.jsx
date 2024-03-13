import React, { useState , useContext } from 'react'
import "../styling/commentcard.css"
import SortDateBy from '../utils/sortDate'
import { MdDelete } from "react-icons/md";
import UserContext from './context/UserContext';
import {deleteCommentById} from "../app"


function CommentCard({comment, setUpVote, onDeleteComment}) {
  const {userLoggedIn} = useContext(UserContext)
  const [err, setErr] = useState(null);
  
  const deleteComment = (event) => {
    event.preventDefault();

    if (comment.author === userLoggedIn.username) {
      deleteCommentById(comment.comment_id)
        .catch((error) => {
          setErr('Something went wrong, please try again.');
        });
        onDeleteComment(comment.comment_id);
    }
  };
  return ( 
    <div> 
        {err ? <p>{err}</p> : null}
      <div className="comment-card">
      <div className="comment-author">{comment.author}  <div className='comment-date'>{SortDateBy(comment.created_at)}</div> </div>
      <div className="comment-body"> {comment.body}</div>
      
      <div className="comment-votes">  <button onClick={() => setUpVote(comment.comment_id , 1)}><span className='up-arrow'>&#8593;</span></button> <button onClick={() => setUpVote(comment.comment_id , -1)}><span className='down-arrow'>&#8595;</span></button>   {comment.votes}  </div>
      <div className='comment-delete'><button onClick={(event) => deleteComment(event)}><MdDelete /></button></div>
    </div>
    </div>
  )
}

export default CommentCard
