import React, { useState } from 'react'
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from '@mui/material';
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
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
