import React from 'react'
import "../styling/header.css"
import { Link } from 'react-router-dom'
import { TiNews } from "react-icons/ti";



function Header() {
  return (
    <div>
       <Link to="/" className='nav-links'><TiNews className='news-icon' /> </Link> 
       <h1>NC News</h1>
        <nav> 
        <Link to="/articles" className='nav-links'>Articles</Link> 
        </nav>
    </div>
  )
}

export default Header
