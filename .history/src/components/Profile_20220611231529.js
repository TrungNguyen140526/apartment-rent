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
          <Box sx={{ bgcolor: "#ebf1f6", height: "100vh", display: "flex" }}>
            <Box
              sx={{
                bgcolor: "#e7b2b7",
                height: "500px",
                width: "400px",
                ml: 4,
                mt: 4,
                borderRadius: 4,
              }}
            >
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
