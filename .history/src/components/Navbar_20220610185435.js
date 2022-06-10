import React from 'react'
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from "../assets/logo.jpg";

function Navbar() {
  return (
    <div className='App'>
      <Box sx={{flexGrow: 1, marginBottom: 3}}>
        <AppBar position='static'>
          <Toolbar>
            <Typography noWrap component="div" sx={{mr:2, display: {xs: "none", md: "flex"}}}>
              <img src={} />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
