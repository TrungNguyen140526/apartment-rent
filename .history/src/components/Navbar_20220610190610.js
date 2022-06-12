import React, { useState } from 'react'
import { Box } from "@mui/system";
import { AppBar, IconButton, Menu,  Toolbar, Typography } from '@mui/material';
import logo from "../assets/logo.png";

const pages = ["Test1", "Test2", "Test3"];

function Navbar() {

  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <div className='App'>
      <Box sx={{flexGrow: 1, marginBottom: 3}}>
        <AppBar position='static'>
          <Toolbar>
            <Typography noWrap component="div" sx={{mr:2, display: {xs: "none", md: "flex"}}}>
              <img src={logo} style={{width: 80, heigt: 80}} alt="logo"/>
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: "flex", md: "none"}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
