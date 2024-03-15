import React, { useEffect, useState } from 'react'
import { getTopic } from '../app'
import TopicArticle from './TopicArticle'
import "../styling/topic.css"
import { useNavigate  } from "react-router-dom";
import {useSearchParams} from "react-router-dom"

import Button from "@mui/material/Button"

function Topic() {
const [topics, setTopic] = useState([])
const [filteredTopic, setFilterTopic] = useState(null)
let [searchParams, setSearchParams] = useSearchParams();
const navigate = useNavigate();

useEffect(() => {

  getTopic().then((response) => {
    setTopic(response)
  }).catch(() => {
    navigate("/errorpage", { state : {message : "wrong category"}})
  })
}, [])

const filterTopic = (topic) => {
  setFilterTopic(topic)
  setSearchParams({category : topic})
}

  return (
    <div>
       <ul>{topics.map((topic) => {
          return  <Button color="secondary" className='topic-button' onClick={() => filterTopic( topic.slug)} key={topic.slug}> {topic.slug} </Button> 
          
       })}</ul>
          { <TopicArticle topic={filteredTopic}  /> }
    </div>
    
  ) 
}

export default Topic
