<<<<<<< HEAD
import Navbar from "./Navbar";
import React, { useState } from 'react'
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Dashboard() {
  return (
    <div className="App">
      <Navbar></Navbar>
    </div>
  );
}
