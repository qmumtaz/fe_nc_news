import React, { useEffect, useState } from "react";
import { useParams  } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import "../styling/postcomment.css";
import { postCommentByArticleId } from "../app";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function PostComment() {
  const { article_id } = useParams();
  const [newUsername, setUsername] = useState("");
  const [inputBody, setBody] = useState("");
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const newComment = {
    username: newUsername,
    body: inputBody,
  };

const handleSubmit = (event) => {
    event.preventDefault();

    postCommentByArticleId(article_id, newComment).catch((err) => {
        setErr('Something went wrong, please try again.');
    })
    navigate(`/articles/${article_id}`)
}
 

{err ? <p>{err}</p> : null}
  return (
    <div className="postComment" onSubmit={handleSubmit}>
      <form className="post-form">
        <label htmlFor=""> Username</label>
        <TextField id="" label="" variant="outlined" type="text" className="post-input" required value={newUsername} 
            placeholder="grumpy19"
        onChange={(event) => setUsername(event.target.value)}  />
        <label htmlFor=""> Body</label>
        <textarea id="" label="" variant="outlined" 
          name=""
          
          cols="30"
          rows="10"
          className="post-text"
          onChange={(event) => setBody(event.target.value)} 
          required
          value={inputBody}
        ></textarea>
        <Button variant="contained" color="success"n type="submit"> Submit</Button>
      </form>
    </div>
  );
}

export default PostComment;
