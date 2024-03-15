import React, { useEffect, useState , useContext } from "react";
import { useParams  } from "react-router-dom";
import { useNavigate  } from "react-router-dom";
import "../styling/postcomment.css";
import { postCommentByArticleId } from "../app";
import UserContext from './context/UserContext';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography"


function PostComment() {
  const { article_id } = useParams();
  const [newUsername, setUsername] = useState("");
  const [inputBody, setBody] = useState("");
  const {userLoggedIn} = useContext(UserContext)
  const [err, setErr] = useState(null);
  const navigate = useNavigate();


  const newComment = {
    username: newUsername,
    body: inputBody,
  };

const handleSubmit = (event) => {
    event.preventDefault();

    if (newUsername !== userLoggedIn.username) {
      navigate("/errorpage", { state : {message : "This user does not exist or wrong username"}})
    }
    else{
      postCommentByArticleId(article_id, newComment).catch((err) => {
        setErr('Something went wrong, please try again.');
    })
    navigate(`/articles/${article_id}`)
    }
   
}
 

{err ? <p>{err}</p> : null}
  return (

    <div className="postComment" onSubmit={handleSubmit}>
      <form className="post-form">
        <Typography htmlFor=""> Username</Typography>
        <TextField id="" label="" variant="outlined" type="text" className="post-input" required value={newUsername} 
            placeholder="grumpy19"
        onChange={(event) => setUsername(event.target.value)}  />
        <Typography htmlFor=""> Body</Typography>
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
