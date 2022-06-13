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

      {/* Thông tin cơ bản */}
      <Container maxWidth="md" sx={{ marginTop: 6 }}>
        <Box
          sx={{
            height: "55vh",
            borderRadius: "10px",
            flexGrow: 1,
            boxShadow: "0px 1px 10px 1px black",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            align="center"
            padding={3}
          >
            Thông tin cơ bản
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                marginLeft={8}
              >
                Loại bất động sản
              </Typography>
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
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                marginLeft={8}
              >
                Tỉnh, thành phố
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={apartmentType}
                sx={{ width: 340, marginLeft: "60px", mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Tỉnh, thành phố" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" gutterBottom component="div">
                Quận, huyện
              </Typography>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={apartmentType}
                sx={{ width: 340, mt: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Quận, huyện" />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                marginLeft={8}
              >
                Địa chỉ hiển thị trên tin đăng
              </Typography>
              <TextField
                id="outlined-basic"
                label="Bạn có thể bổ sung chi tiết"
                variant="outlined"
                sx={{ width: 714, mt: 2, marginLeft: "60px" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Thông tin bài viết */}
      <Container maxWidth="md" sx={{ marginTop: 6 }}>
        <Box
          sx={{
            height: "42vh",
            borderRadius: "10px",
            flexGrow: 1,
            boxShadow: "0px 1px 10px 1px black",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            align="center"
            padding={3}
          >
            Thông tin bài viết
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                marginLeft={8}
              >
                Tiêu đề
              </Typography>
              <TextField
                id="outlined-basic"
                label="Tiêu đề"
                variant="outlined"
                sx={{ width: 714, mt: 2, marginLeft: "60px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                marginLeft={8}
              >
                Mô tả
              </Typography>
              <TextField
                id="outlined-basic"
                label="Mô tả"
                variant="outlined"
                size="medium"
                sx={{ width: 714, mt: 2, marginLeft: "60px" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Thông tin bất động sản */}
      <Container maxWidth="md" sx={{ marginTop: 6 }}>
        <Box
          sx={{
            height: "42vh",
            borderRadius: "10px",
            flexGrow: 1,
            boxShadow: "0px 1px 10px 1px black",
          }}
        >
          <Typography
            variant="h3"
            component="div"
            gutterBottom
            align="center"
            padding={3}
          >
            Thông tin căn hộ
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                marginLeft={8}
              >
                Diện tích
              </Typography>
              <TextField
                id="outlined-basic"
                label="Diện tích"
                variant="outlined"
                sx={{ width: 714, mt: 2, marginLeft: "60px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                marginLeft={8}
              >
                Mức giá
              </Typography>
              <TextField
                id="outlined-basic"
                label="Mô tả"
                variant="outlined"
                size="medium"
                sx={{ width: 714, mt: 2, marginLeft: "60px" }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
