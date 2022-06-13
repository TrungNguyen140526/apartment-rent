import { Avatar, CssBaseline } from "@mui/material";
import { Box, Container } from "@mui/system";
import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";

export default function Profile() {

  const auth = getAuth();
  const user = auth.currentUser;

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
              <Avatar sx={{ alignItems: "center", width: "200px", height: "200px"}}alt="Profile Avatar" src={user.photoURL} />
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
