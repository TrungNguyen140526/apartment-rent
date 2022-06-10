import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";

export default function Dashboard() {
  const [setError] = useState("");
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div className="App">
      <Navbar></Navbar>
      <Button color="secondary" variant="contained" onClick={handleLogout} >
        Log out
      </Button>
    </div>
  );
}
