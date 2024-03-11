import React, { useEffect, useState } from 'react'
import { getCommentByArticleId } from '../app'
import CommentCard from './CommentCard'

function Comments({articleId}) {
 const [comments, setComments] = useState([])

 useEffect(() => {
    getCommentByArticleId(articleId).then((response) => {
        setComments(response.comments)
    })
    console.log(comments);
 },[])

console.log(comments);

  return (
    <div>
        <ul>
            {comments.map((comment) => {
                return <CommentCard comment={comment} />
            })}
        </ul>
    </div>
  )
}

export default Comments
