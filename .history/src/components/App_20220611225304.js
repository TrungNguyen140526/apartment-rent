import React from "react"
import { Box } from "@mui/system"
import AuthProvider from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import { createTheme, ThemeProvider } from "@mui/material"
import { orange } from "@mui/material/colors"
import Profile from "./Profile"

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: "#e3d9cf",
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile/>} />
            </Routes>
          </AuthProvider>
        </Router>
    </Box>
    </ThemeProvider>
  )
}

export default App;
