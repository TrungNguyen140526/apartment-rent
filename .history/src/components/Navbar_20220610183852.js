import React from 'react'
import { Box } from "@mui/system";
import { AppBar } from '@mui/material';

function Navbar() {
  return (
    <div className='App'>
      <Box sx={{flexGrow: 1, marginBottom: 3}}>
        <AppBar position='static'>

        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
