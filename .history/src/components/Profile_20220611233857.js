import { Avatar, CssBaseline, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";
import { Stack } from "react-bootstrap";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
      <Navbar></Navbar>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <Box
            sx={{
              bgcolor: "#ebf1f6",
              height: "100vh",
              display: "flex",
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                bgcolor: "#e7b2b7",
                height: "500px",
                width: "400px",
                ml: 4,
                mt: 4,
                borderRadius: 4,
                display: "flex",
              }}
            >
              <Avatar
                sx={{
                  width: "150px",
                  height: "150px",
                  mt: 5,
                  ml: 15,
                  display: { xs: "none", md: "flex" },
                }}
                alt="Profile Avatar"
                src={user.photoURL}
              />
              <Stack spacing={2}>
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
              </Stack>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
