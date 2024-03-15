import React, { useState , useContext } from 'react'
import "../styling/commentcard.css"
import SortDateBy from '../utils/sortDate'
import DeleteIcon from '@mui/icons-material/Delete';
import UserContext from './context/UserContext';
import {deleteCommentById} from "../app"
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


function CommentCard({comment, setUpVote, onDeleteComment}) {
  const {userLoggedIn} = useContext(UserContext)
  const [err, setErr] = useState(null);
  const [showDelete, setShowDelete] = useState(comment.author === userLoggedIn.username);

  
  const deleteComment = (event) => {

    event.preventDefault();
    if (comment.author === userLoggedIn.username) {
      setShowDelete(false)
      deleteCommentById(comment.comment_id).then(() => {
        onDeleteComment(comment.comment_id);
      })
        .catch((error) => {
          setShowDelete(true); 
          setErr('Something went wrong, please try again.');
        });    
    }
  };
  return ( 
    <div> 
        {err ? <p>{err}</p> : null}
      <Card className="comment-card">
      <div className="comment-author">{comment.author}  <div className='comment-date'>{SortDateBy(comment.created_at)}</div> </div>
      <Typography  variant="body2" className="comment-body"> {comment.body}</Typography >
      
      <div className="comment-votes">  
      <Button className='card-votes'  variant="text" onClick={() => setUpVote(comment.comment_id , "up")}><span className='up-arrow'>&#8593;</span></Button> 
      <Button className='card-votes'  variant="text" onClick={() => setUpVote(comment.comment_id , "down")}><span className='down-arrow'>&#8595;</span></Button>

      {comment.votes} </div> 
      <div>
      <IconButton aria-label="delete"  color="primary" className='comment-delete'>  { showDelete ?  (<DeleteIcon className='comment-delete'  onClick={(event) => deleteComment(event)}/>) : null}  
      </IconButton>
      </div>
      
    </Card>
    </div>
  )
}

export default CommentCard
