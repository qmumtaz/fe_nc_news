import React, { useContext } from 'react'
import "../styling/header.css"
import { Link } from 'react-router-dom'
import { TiNews } from "react-icons/ti";
import UserContext from './context/UserContext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography"
import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material';


function Header() {
const {userLoggedIn} = useContext(UserContext)

const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const handleOpenUserMenu = (event) => {
  setAnchorElUser(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
};


  return (
    <AppBar position="">
  <Container maxWidth="xxl">
    <Toolbar disableGutters>
      <Link to="/" className='news-icon'>
        <TiNews />
        <Typography variant="h6" className='nav-header'>NC News</Typography>
      </Link>
      
      <Stack direction="row" spacing={2} className='header-user'>
        <Box sx={{ flexGrow: 0 }} className="header-box">
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }} className='header-avatar'>
              <Avatar alt="avatar" src={userLoggedIn.avatarUrl} />
              <Typography variant="subtitle1" className='avatar-name'>{userLoggedIn.username}</Typography>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Stack>
     
    </Toolbar>
    <nav className='nav-bar-links'> 
        <Link to="/articles" className='link-text'> Articles</Link> 
        <Link to="/topic" className='link-text'> Topics</Link> 
      </nav>
  </Container>
</AppBar>

  )
}

export default Header
