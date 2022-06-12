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
          <Box sx={{ bgcolor: "#ebf1f6", height: "100vh", display: ''}}>
            <Box sx={{ bgcolor: "#759cd7",  height: "500px", width: "500px", ml: 4, mt: 4}}></Box>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
