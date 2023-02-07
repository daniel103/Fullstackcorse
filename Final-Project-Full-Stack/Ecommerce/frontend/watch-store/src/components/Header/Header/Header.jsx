import * as React from 'react';
import { useState, useEffect } from "react"
import './Header.css';
import {AppBar, Box, Toolbar } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import {Store}  from '../../../store';
import {Link, useNavigate} from "react-router-dom";



const Header = () => {

  let navigate = useNavigate();
  const [auth, setAuth] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const { state, dispatch: ctxDispatch} = useContext(Store);
  const { cart, userInfo } = state;

  const handleChangeProfile = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };



  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function LogoutHandler  ()  {
    ctxDispatch({ type: 'USER_LOGOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('shoppingAddress');
    navigate('/login')
  }
  
  useEffect(() => {
    if(!userInfo) {
      navigate("/login")
    }
  
  }, [userInfo, navigate])

  return (
    <Box sx={{ flexGrow: 1 }} className="nav-bar">
    <AppBar position="static" className="Toolbar">
      <Toolbar>
        <Box className="Toolbar">
            <div>
              <MenuIcon
                onClick={handleMenu}
                className="menu"
              >
              </MenuIcon>
                <Link to="/cart" className="nav-link">
                  <strong>Cart</strong>
                  {/* try Banner Cart */}
                  {/* {cart.cartItems.length > 0 && (
                      <strong pill bg="danger">
                        ({cart.cartItems.reduce((a, c) => a + c.quantity, 0)})
                      </strong>
                    )} */}
                </Link>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                {userInfo && userInfo.isAdmin && (
                <MenuItem onClick={() => navigate("/admin/orders")}>orders</MenuItem>
                )}
                <MenuItem onClick={LogoutHandler}>Logout</MenuItem>
              </Menu>
            </div>
        </Box>
          <div className="logo">
            <a href='http://localhost:3000/'>
          <img src="https://www.jomashop.com/dist/jomashop_logo.1590bcd618a33f26d6369c4066b82aaf.png" alt="logo" id="logo" />
          </a>
          </div>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Header