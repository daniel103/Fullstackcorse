import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Navbar = ({ searchVal, setSearchVal, fetchShowFromApi }) => {
  let handleInputChange = (event) => {
    setSearchVal(event.target.value);
  };

  let handleSearchClick = () => {
    if (searchVal === "") alert("You need to enter value");
    fetchShowFromApi();
    setSearchVal("");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Show Search
          </Typography>
          <TextField
            onChange={handleInputChange}
            value={searchVal}
            variant="standard"
            placeholder="Enter Name..."
          />
          <Button
            onClick={handleSearchClick}
            className="navbar-btn"
            variant="outlined"
          >
            Search
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
