<<<<<<< HEAD
import Navbar from "./Navbar";
import React, { useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
>>>>>>> bca4f24f754bb000bfe30e29ab9f0f8cf0f8490c

export default function Dashboard() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}
