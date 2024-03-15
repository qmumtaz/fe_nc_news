import axios from "axios";

const getAllArticles = (sortby = "created_at", order = "DESC") => {
  let url = `https://nc-news-9quh.onrender.com/api/articles`;

  if (sortby && sortby !== "all") {
    url += `?sort_by=${sortby}`;
    if (order) {
      url += `&order=${order}`;
    }
  } else if (order) {
    url += `?order=${order}`;
  }


  return axios.get(url).then((response) => {

    return response.data.articles;
  });
};

const getArticleById = (id) => {
  const url = `https://nc-news-9quh.onrender.com/api/articles/${id}`;
  return axios.get(url).then((response) => {
    return response.data.article;
  });
};

const getCommentByArticleId = (id) => {
  const url = `https://nc-news-9quh.onrender.com/api/articles/${id}/comments`;

  return axios.get(url).then((response) => {
    return response.data;
  });
};

const patchCommentByVotes = (comment_id, comment) => {
  const url = `https://nc-news-9quh.onrender.com/api/comments/${comment_id}`;
  const comments = {
    inc_votes: comment.inc_votes,
  };

  return axios.patch(url, comments).then((response) => {
    return response;
  });
};

const postCommentByArticleId = (article_id, newComment) => {
  const url = `https://nc-news-9quh.onrender.com/api/articles/${article_id}/comments`;
  const comment = {
    username: newComment.username,
    body: newComment.body,
  };
  return axios.post(url, comment);
};

const deleteCommentById = (comment_id) => {
  const url = `https://nc-news-9quh.onrender.com/api/comments/${comment_id}`;

  return axios.delete(url);
};

const getTopic = () => {
  const url = `https://nc-news-9quh.onrender.com/api/topics`;

  return axios.get(url).then((response) => {
    return response.data.topics;
  });
};

const patchArticleById = (id , newVote) => {
  const url = `https://nc-news-9quh.onrender.com/api/articles/${id}`;
  const votes = {
    inc_votes : newVote.inc_votes
  }

  return axios.patch(url, votes).then((response) => {
    return response;
  });
}

const postNewArticle = (postBody) => {
  const url = `https://nc-news-9quh.onrender.com/api/articles`;
  const articleData = {
    author : postBody.author,
      title : postBody.title,
      body : postBody.body,
      topic : postBody.topic,
      article_img_url: postBody.article_img_url
  }
  return axios.post(url, articleData).then((response) => {
    return response
  });
} 

export {
  getAllArticles,
  getArticleById,
  getCommentByArticleId,
  patchCommentByVotes,
  postCommentByArticleId,
  deleteCommentById,
  getTopic,
  patchArticleById,
  postNewArticle
};
