import { Autocomplete, Grid, TextField } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import "../assets/base.css";

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
      <Container maxWidth="md" sx={{ marginTop: 10 }}>
        <Box
          sx={{
            height: "100vh",
            borderRadius: "10px",
            flexGrow: 1,
            boxShadow: "0px 1px 10px 1px black",
          }}
        >
          <h2 className="basic">Thông tin cơ bản</h2>
          <Grid container spacing={2}>
            <Grid item xs={12} marginTop={3}>
              <h5 className="formLabel">Loại chung cư</h5>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={apartmentType}
                sx={{ width: 714, marginLeft: "60px" }}
                renderInput={(params) => (
                  <TextField {...params} label="VD: Chung cư" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <h5 className="formLabel">Loại chung cư</h5>
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
              <h5>Loại chung cư</h5>
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
