import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  AppBar,
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import logo from "../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import { useAuth } from "../contexts/AuthContext";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const pages = ["Chung cư cho thuê", "Dự án", "Tin tức"];
const settings = ["Profile", "Logout"];

function Navbar() {
  const auth = getAuth();
  const user = auth.currentUser;

  const [error, setError] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  const handleOpenProfile = () => {
    navigate("/profile");
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              onClick={handleOpenD}
            >
              <img src={logo} style={{ width: 80, heigt: 80 }} alt="logo" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mr: 3,
                    color: "white",
                    display: "block",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Button color="secondary" variant="contained" sx={{ mr: 3 }}>
              Đăng tin
            </Button>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="profile avatar" src={user.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting}>
                    <Typography textAlign="center" onClick={handleOpenProfile}>
                      {setting.match("Profile")}
                    </Typography>
                    <Typography textAlign="center" onClick={handleLogout}>
                      {setting.match("Logout")}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navbar;
