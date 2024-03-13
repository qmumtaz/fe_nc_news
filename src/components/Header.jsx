import React, { useContext } from 'react'
import "../styling/header.css"
import { Link } from 'react-router-dom'
import { TiNews } from "react-icons/ti";
import UserContext from './context/UserContext';



function Header() {
const {userLoggedIn} = useContext(UserContext)

  return (
    <div className='navbar'>
       <Link to="/" ><TiNews className='news-icon' /> </Link> 
       <div className='header-user'>
        <p>{userLoggedIn.username}</p>
        <img src={userLoggedIn.avatarUrl} alt="" />
       </div>
       <h1 className='nav-header'>NC News</h1>
      
        <nav className='nav-bar-links'> 
        <Link to="/articles" >Articles</Link> 
        <Link to="/topic" >Topic</Link> 
        </nav>
    </div>
  )
}

export default Header
