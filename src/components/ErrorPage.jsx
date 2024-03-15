import React from 'react'
import {useLocation} from "react-router-dom"
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function ErrorPage() {
  const location = useLocation();
  const errorMessage = location.state.message;
  return (
    <div>
     <Alert severity="error">
  <AlertTitle>Error</AlertTitle>
  {errorMessage}
    </Alert>
      
    </div>
  )
}

export default ErrorPage
