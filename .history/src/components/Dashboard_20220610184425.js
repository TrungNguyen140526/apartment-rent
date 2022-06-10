import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Navbar from "./Navbar";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
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
      <Navbar>
      <Button variant="contained" onClick={handleLogout}>
        Log out
      </Button>
      </Navbar>
      
    </div>
  );
}
