import React from "react"
import { Box } from "@mui/system"
import AuthProvider from "../contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import { createTheme, ThemeProvider } from "@mui/material"
import { orange } from "@mui/material/colors"

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    se
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
            </Routes>
          </AuthProvider>
        </Router>
    </Box>
    </ThemeProvider>
  )
}

export default App;
