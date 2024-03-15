import React from 'react'
import {useLocation} from "react-router-dom"

function ErrorPage() {
  const location = useLocation();
  const errorMessage = location.state.message;
  return (
    <div>
      <h1>{errorMessage}</h1>
    </div>
  )
}

export default ErrorPage
