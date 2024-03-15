import React, { useEffect, useState } from 'react'
import {getAllArticles} from "../app"
import ArticleCard from './ArticleCard';
import {Link} from "react-router-dom";
import {useSearchParams} from "react-router-dom"
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import Loading from './Loading';
import "../styling/article.css"
import PostArticle from './PostArticle';


function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, SetLoading] = useState(true);
  let [searchParams, setSearchParams] = useSearchParams();
  const [sort_by, setSortBy] = useState(searchParams.get("sort_by"))
  const [order, setOrder] = useState(searchParams.get("order"))
  

  useEffect(() => {
    SetLoading(true)
    getAllArticles(sort_by, order).then((response) => {
      setArticles(response);
      SetLoading(false)
    });
  }, [searchParams ]);


  const sortArticle = (event) => {
    const selectedSort = event.target.value;
    if (selectedSort === "all") {
    setSortBy("");
  } else {
    setSortBy(selectedSort);
    setSearchParams({sort_by : selectedSort , order : order})
  }
  };

  const orderByArticle = (event) => {
    event.preventDefault();
    const orderBy = event.target.value;
    setOrder(orderBy);
    setSearchParams({sort_by : sort_by , order : orderBy})
  };

  if (loading) {
    return <Loading />
  }

  return (
    <>
    <section>
   
    <NativeSelect
        name=""
        id="drop-down"
        onChange={sortArticle}
        value={sort_by}
        className="select-form"
      >
        <option  value="all">All</option >
        <option  value="votes">Votes</option >
        <option  value="created_at">Date</option >
      </NativeSelect>
      <NativeSelect
        name=""
        id="drop-down"
        onChange={orderByArticle}
        value={order}
        className="select-form"
      >
        
        <option  value="desc">Descending</option >
        <option  value="asc">Ascending</option >
      </NativeSelect>
        </section>
        <Link to={`/postArticle`} className='article-link'> <Button> Post Article</Button>  </Link>  
      <ul>  {  articles.map((article) => {
      
       return  <Link to={`/articles/${article.article_id}`} className='article-link'> <ArticleCard article={article} key={article.article_id}/></Link>  
        
      })}</ul>
    </>
  );
}

export default Articles
