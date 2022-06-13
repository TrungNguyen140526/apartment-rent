import { Autocomplete, Grid, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

export default function Posting() {
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="md">
        <Box
          sx={{ bgcolor: "#ff98001c", height: "100vh", borderRadius: "10px" }}
        >
          <Grid container spacing={2}>
            <p>Loaị bất động sản</p>
            <Grid item xs={6}>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Movie" />
                )}
              />
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
