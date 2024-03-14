import React, { useEffect, useState } from 'react'
import { getTopic } from '../app'
import TopicArticle from './TopicArticle'
import "../styling/topic.css"

function Topic() {
const [topics, setTopic] = useState([])
const [filteredTopic, setFilterTopic] = useState(null)

useEffect(() => {

  getTopic().then((response) => {
    setTopic(response)
  })
}, [])

const filterTopic = (topic) => {
  setFilterTopic(topic)
  
}

  return (
    <div>
       <ul>{topics.map((topic) => {
          return  <button className='topic-button' onClick={() => filterTopic( topic.slug)} key={topic.slug}> {topic.slug} </button> 
          
       })}</ul>
          { <TopicArticle topic={filteredTopic}  /> }
    </div>
    
  ) 
}

export default Topic
