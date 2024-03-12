import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import Homepage from './components/Homepage';
import SingleArticle from './components/SingleArticle';
import PostComment from './components/PostComment';


function App() {
  
  return (
   <>
   <Header />
   <Routes>
    <Route path='/' element={<Homepage/>}/>
      <Route path='/articles' element={<Articles/>}/>
      <Route path='/articles/:article_id' element={<SingleArticle/>}/>
      <Route path='/article/:article_id/comments' element={<PostComment/>}/>
    </Routes>
   </>
    
  )
}

export default App
