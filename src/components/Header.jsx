import React from 'react'
import "../styling/header.css"
import { Link } from 'react-router-dom'
import { TiNews } from "react-icons/ti";



function Header() {
  return (
    <div className='navbar'>
       <Link to="/" ><TiNews className='news-icon' /> </Link> 
       <h1 className='nav-header'>NC News</h1>
        <nav className='nav-bar-links'> 
        <Link to="/articles" >Articles</Link> 
        </nav>
    </div>
  )
}

export default Header
