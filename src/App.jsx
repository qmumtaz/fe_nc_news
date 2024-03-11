import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import Homepage from './components/Homepage';
import SingleArticle from './components/SingleArticle';


function App() {
  
  return (
   <>
   <Header />
   <Routes>
    <Route path='/home' element={<Homepage/>}/>
      <Route path='/articles' element={<Articles/>}/>
      <Route path='/articles/:id' element={<SingleArticle/>}/>
    </Routes>
   </>
    
  )
}

export default App
