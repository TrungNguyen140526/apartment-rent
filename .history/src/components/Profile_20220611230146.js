import { CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import Navbar from "./Navbar";
import * as React from 'react';

export default function Profile() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="md">
          <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
        </Container>
      </React.Fragment>
    </div>
  );
}
