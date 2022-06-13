import { Avatar, CssBaseline, Typography } from "@mui/material";
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
                display: "flex"
              }}
            >
              <Avatar
                sx={{
                  justifyContent: "center",
                  width: "150px",
                  height: "150px",
                  mt: 5,
                  ml: 15,
                }}
                alt="Profile Avatar"
                src={user.photoURL}
              />
              <Typography variant="h6" sx={{ justifyContent: "center", mt: 2, ml: 8 }}>
                {user.displayName}
              </Typography>
              <Typography variant="h6" sx={{ justifyContent: "center", mt: 2, ml: 8 }}>
                {user.email}
              </Typography>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
