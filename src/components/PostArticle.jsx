import {useContext , useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography"
import UserContext from './context/UserContext';
import {postNewArticle} from "../app"
import { useNavigate  } from "react-router-dom";
import "../styling/postarticle.css"

function PostArticle() {
const {userLoggedIn} = useContext(UserContext)

const [author, setAuthor] = useState('');
const [title, setTitle] = useState('');
const [body, setBody] = useState('');
const [topic, setTopic] = useState('');
const [articleImgUrl, setArticleImgUrl] = useState('');
const [err, setErr] = useState(null);
const navigate = useNavigate();


const newArticle = {
    author: author,
    title: title,
    body: body,
    topic: topic,
    articleImgUrl: articleImgUrl,
  };


const handleSubmit = (event) => {
    event.preventDefault();
  
    if (author !== userLoggedIn.username) {
      navigate("/errorpage", { state: { message: "This user does not exist or wrong username" } });
    } else {
        postNewArticle(newArticle)
        .then(() => {
          navigate(`/articles`);
        })
        .catch((err) => {  
          setErr('Something went wrong, please try again.');
        });
    }
  };
  

  return (
    <div>
       <div className="postComment">
        <form className="post-form" onSubmit={handleSubmit}>
          <Typography htmlFor="">User name</Typography>
          <TextField
            
            label="username"
            variant="outlined"
            type="text"
            className="post-input"
            required
            placeholder="Enter username"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
          <Typography htmlFor="">Title</Typography>
          <TextField
            id="title"
            label="Title"
            variant="outlined"
            type="text"
            className="post-input"
            required
            placeholder="Enter title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <Typography htmlFor="">Body</Typography>
          <TextField
            
            variant="outlined"
            type="text"
            className="post-input"
            required
            placeholder="Enter body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          />
          <Typography htmlFor="">Topic</Typography>
          <TextField
           
            variant="outlined"
            type="text"
            className="post-input"
            required
            placeholder="Enter topic"
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          />
          <Typography htmlFor="">Article Image URL</Typography>
          <TextField
           
            variant="outlined"
            type="text"
            className="post-input"
            placeholder="Enter article image URL"
            value={articleImgUrl}
            onChange={(event) => setArticleImgUrl(event.target.value)}
          />
          <Button variant="contained" color="primary" type="submit" className='post-submit'>Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default PostArticle
