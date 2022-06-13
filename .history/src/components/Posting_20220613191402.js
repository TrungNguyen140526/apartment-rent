import { Autocomplete, Grid, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import "../assets/base.css";

export default function Posting() {
  const apartmentType = [{ label: "Chung cư" }];

  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="md" sx={{ marginTop: 6 }}>
        <Box
          sx={{
            height: "100vh",
            borderRadius: "10px",
            flexGrow: 1,
            boxShadow: "0px 1px 10px 1px black",
          }}
        >
          <Typography variant="h3" component="div" gutterBottom align="center" padding={3}>
            Thông tin cơ bản
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <h5 className="formLabel">Loại bất động sản</h5>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={apartmentType}
                sx={{ width: 714, marginLeft: "60px", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="VD: Chung cư" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <h5 className="formLabel">Tỉnh, Thành Phố</h5>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={apartmentType}
                sx={{ width: 340, marginLeft: "60px", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="VD: Chung cư" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <h5>Quận, huyện</h5>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={apartmentType}
                sx={{ width: 340, mt: 2 }}
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
