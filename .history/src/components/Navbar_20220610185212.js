import React from 'react'
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography } from '@mui/material';
import logo from 

function Navbar() {
  return (
    <div className='App'>
      <Box sx={{flexGrow: 1, marginBottom: 3}}>
        <AppBar position='static'>
          <Toolbar>
            <Typography>

            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
