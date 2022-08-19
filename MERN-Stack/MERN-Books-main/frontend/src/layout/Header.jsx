import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AuthService from "../services/AuthService";
import { useNavigate, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Layout.css";

let activeLinkClassName = "link-active";

const Header = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleLogout = async () => {
    handleClose();
    await AuthService.logout();
    setIsAuth(false);
    navigate("/login");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Book World
          </Typography>
          {isAuth ? (
            <>
              <ul className="header-links-container">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLinkClassName : undefined
                    }
                    to="/book"
                  >
                    Books
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? activeLinkClassName : undefined
                    }
                    to="/author"
                  >
                    Authors
                  </NavLink>
                </li>
              </ul>
              <div>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </>
          ) : (
            <Link className="header-login-btn" to="/login">
              <Button variant="outlined" color="secondary">
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
