import axios from 'axios';

const getAllArticles = () => {
    const url = `https://nc-news-9quh.onrender.com/api/articles`;
    return axios.get(url)
    .then((response) => {    
        return response.data.articles
    })
}

const getArticleById = (id) => {

    const url = `https://nc-news-9quh.onrender.com/api/articles/${id}`;
    return axios.get(url)
    .then((response) => {        
        return response.data.article
    })
}

const getCommentByArticleId = (id) => {
    const url = `https://nc-news-9quh.onrender.com/api/articles/${id}/comments`;

    return axios.get(url)
    .then((response) => {
        return response.data
    })
}

const patchCommentByVotes = (comment_id , comment) => {
    const url = `https://nc-news-9quh.onrender.com/api/comments/${comment_id}`;
    const comments = {
        inc_votes : comment.inc_votes
    }

    return axios.patch(url, comments)
           .then((response) => {
           return response
        })
}

const postCommentByArticleId = (article_id, newComment) => {
    const url = `https://nc-news-9quh.onrender.com/api/articles/${article_id}/comments`;
    const comment = {
        username : newComment.username,
        body : newComment.body
    }
    return axios.post(url, comment);

}

const deleteCommentById = (comment_id) => {
    const url = `https://nc-news-9quh.onrender.com/api/comments/${comment_id}`;

    return axios.delete(url);
}


export {getAllArticles , getArticleById, getCommentByArticleId , patchCommentByVotes , postCommentByArticleId , deleteCommentById} 