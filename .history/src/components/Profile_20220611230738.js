import { CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import Navbar from "./Navbar";
import * as React from "react";

export default function Profile() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box sx={{ bgcolor: "#ebf1f6", height: "100vh" }}>
            
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
