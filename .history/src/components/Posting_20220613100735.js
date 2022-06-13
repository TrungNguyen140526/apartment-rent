import { Autocomplete, Grid, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

export default function Posting() {
  const apartmentType = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "12 Angry Men", year: 1957 },
  ];

  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="md">
        <Box
          sx={{ bgcolor: "#ff98001c", height: "100vh", borderRadius: "10px", flexGrow: 1 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <h4 style="marginLeft: "60px"></h4>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={apartmentType}
                sx={{ width: 340, marginLeft: "60px" }}
                renderInput={(params) => (
                  <TextField {...params} label="VD: Chung cư" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
            <p>Loaị bất động sản</p>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={apartmentType}
                sx={{ width: 340 }}
                renderInput={(params) => (
                  <TextField {...params} label="VD: Chung cư" />
                )}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
