import { borderRadius, Box, Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

export default function Posting() {
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#ff98001c", height: "100vh",  borderRadius: "10px"}}>
            <Grid Container ></Grid>
        </Box>
      </Container>
    </>
  );
}
