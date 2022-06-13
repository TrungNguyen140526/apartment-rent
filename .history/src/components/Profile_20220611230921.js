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
            <Box sx={{ bgcolor: "##759cd7",  height: "100px", width: "100px"}}></Box>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
