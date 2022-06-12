import { Paper } from "@mui/material";
import Navbar from "./Navbar";
import * as React from "react";
import { getAuth } from "firebase/auth";
import styled from "@emotion/styled";

export default function Profile() {
  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div className="App">
      <Navbar></Navbar>
      
    </div>
  );
}
