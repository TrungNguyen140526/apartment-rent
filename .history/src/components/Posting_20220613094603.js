import { borderRadius, Box, Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

export default function Posting() {
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="md">
        <Box sx={{ bgcolor: "#ff98001c", height: "100vh", border: "1px solid #333" borderRadius: "10px"}}>

        </Box>
      </Container>
    </>
  );
}
