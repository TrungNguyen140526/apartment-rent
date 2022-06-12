import { Paper } from "@mui/material";
import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";
import styled from "@emotion/styled";

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
      
    </div>
  );
}
