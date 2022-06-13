import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

export default function Posting() {
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}></Box>
      </Container>
    </>
  );
}
