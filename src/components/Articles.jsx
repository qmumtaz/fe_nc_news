import React, { useEffect, useState } from 'react'
import {getAllArticles} from "../app"
import ArticleCard from './ArticleCard';
import {Link} from "react-router-dom"

import Loading from './Loading';

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [sort_by, setSortBy] = useState("")
  const [order, setOrder] = useState("")


  useEffect(() => {
    SetLoading(true)
    getAllArticles(sort_by, order).then((response) => {
      setArticles(response);
      SetLoading(false)
    });
  }, [sort_by , order]);


  if (loading) {
    return <Loading />
  }

  const sortArticle = (event) => {
    const selectedSort = event.target.value;
    if (selectedSort === "all") {
    setSortBy("");
  } else {
    setSortBy(selectedSort);
  }
  };

  const orderByArticle = (event) => {
    event.preventDefault();
    const orderBy = event.target.value;
    setOrder(orderBy);
  };



  return (
    <>
    <section>
    <select
        name=""
        id="drop-down"
        onChange={sortArticle}
        value={sort_by}
        className="select-form"
      >
        <option value="all">All</option>
        <option value="votes">Votes</option>
        <option value="created_at">Date</option>
      </select>
      <select
        name=""
        id="drop-down"
        onChange={orderByArticle}
        value={order}
        className="select-form"
      >
        
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
        </section>
      <ul>  {  articles.map((article) => {
      
       return  <Link to={`/articles/${article.article_id}`}> <ArticleCard article={article} key={article.article_id}/></Link>  
        
      })}</ul>
    </>
  );
}

export default Articles
