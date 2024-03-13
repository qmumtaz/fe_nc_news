import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import Homepage from './components/Homepage';
import SingleArticle from './components/SingleArticle';
import PostComment from './components/PostComment';
import UserContext from "./components/context/UserContext"


function App() {
  const [userLoggedIn , setLoggedInUser] = useState({
    username : "grumpy19",
    avatarUrl : "https://vignette.wikia.nocookie.net/mrmen/images/7/78/Mr-Grumpy-3A.PNG/revision/latest?cb=20170707233013"
})
  
  return (
   <UserContext.Provider value={{userLoggedIn : userLoggedIn , setLoggedInUser : setLoggedInUser}} >
   <Header />
   <Routes>
    <Route path='/' element={<Homepage/>}/>
      <Route path='/articles' element={<Articles/>}/>
      <Route path='/articles/:article_id' element={<SingleArticle/>}/>
      <Route path='/article/:article_id/comments' element={<PostComment/>}/>
    </Routes>
   </UserContext.Provider>
    
  )
}

export default App
