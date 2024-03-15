import React from 'react'
import "../styling/homepage.css"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom'

function Homepage() {
  return (
    <>
     <Typography variant='h3' className='homepage-header'> Welcome to NC News </Typography>
     <Typography variant='h6' className='homepage-header'> These are some of the last articles posted </Typography>
     <div className='homepage'>
     
     <Card sx={{ maxWidth: 345 }} className='homepage-card' >
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700"
         alt="cooking"
       />
       <CardContent className='homepage-content'>
         <Typography gutterBottom variant="h5" className='homepage-card-header' >
         The Notorious MSG’s Unlikely Formula For Success
         </Typography>
         <Typography variant="body2" color="text.secondary" className='homepage-section'>
         The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the
          world’s most innovative chefs. But secret ingredient monosodium 
         glutamate’s biggest secret may be that there was never anything wrong with it at all.
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions className='homepage-links'>
       <Button size="small" color="primary">
       <Link to="/articles" >
        Go to articles
        </Link>
       </Button>
     </CardActions>
   </Card>

   <Card sx={{ maxWidth: 345 }} className='homepage-card' >
     <CardActionArea>
       <CardMedia
         component="img"
         height="140"
         image="https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700"
         alt="coding"
       />
       <CardContent className='homepage-content'>
         <Typography gutterBottom variant="h5" className='homepage-card-header'>
         The battle for Node.js security has only begun
         </Typography>
         <Typography variant="body2" color="text.secondary" className='homepage-section'>
         The founder of the Node Security Project says Node.js still has common vulnerabilities, 
         but progress has been made to make it more secure. Appearing at the recent Node Community Convention in
         
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions className='homepage-links'>
       <Button size="small" color="primary" >
       <Link to="/articles" >
       Go to articles
      </Link>
       </Button>
     </CardActions>
   </Card>

  
     </div>
    </>
    
    

  
  )
}

export default Homepage
