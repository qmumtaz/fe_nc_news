import axios from 'axios';

const getAllArticles = () => {
    const url = `https://nc-news-9quh.onrender.com/api/articles`;
    return axios.get(url)
    .then((response) => {
      
        return response.data.articles
    })
}


export default getAllArticles