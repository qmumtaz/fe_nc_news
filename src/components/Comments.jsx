import React, { useEffect, useState } from 'react'
import { getCommentByArticleId, patchCommentByVotes } from '../app'
import CommentCard from './CommentCard'
import Loading from './Loading'

function Comments({articleId}) {
 const [comments, setComments] = useState([])
 const [loading, setLoading] = useState(true)
 const [err, setErr] = useState(null);

 useEffect(() => {
  setLoading(true)
    getCommentByArticleId(articleId).then((response) => {
        setComments(response.comments)
        setLoading(false)
    })
   
 },[])


 const setUpVote = (comment_id, votesComment) => {
  const patchComment = {
    inc_votes :  votesComment === "up" ? 1 : (votesComment === "down" ? -1 : 0 )
  }

    setComments((currentComments) => {
      return currentComments.map((comment) => {
        if (comment.comment_id === comment_id) {
          return {...comment, votes : comment.votes + patchComment.inc_votes};         
        }
        return comment;
      })
    })
    patchCommentByVotes(comment_id, patchComment).catch((err) => {
      setComments((currentComments) => {
        return currentComments.map((comment) => {
          if (comment.comment_id === comment_id) {
            return {...comment, votes : comment.votes - patchComment.inc_votes};         
          }
          return comment;
        })
      })
      setErr('Something went wrong, please try again.');
    })
 }

 const handleDeleteComment = (deletedCommentId) => {
  setComments((currentComments) =>
    currentComments.filter((comment) => comment.comment_id !== deletedCommentId)
  );
};



 if (loading && comments.length > 0) {
    return <Loading />
 }

  return (
    <div>
        <ul>
            {comments.map((comment) => {
                {err ? <p>{err}</p> : null}
                return <CommentCard comment={comment} setUpVote={setUpVote}  onDeleteComment={handleDeleteComment} key={comment.comment_id} />
            })}
        </ul>
    </div>
  )
}

export default Comments
