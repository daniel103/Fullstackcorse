import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Feed from "../../components/Feed/Feed";
import "./Home.css";
import Fab from "@mui/material/Fab";

const Home = ({ setUser, username }) => {
  // 1. create btn - Done
  // 2. create modal - Done
  // 4. add form to modal - Done
  // 3. handle open modal logic - Done
  // 5. add new post

  const [openModal, setOpenModal] = useState(false);

  function toggleModal() {
    setOpenModal(!openModal);
  }

  function handleLogout() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <div className="home-wrapper">
      <AppBar className="home-navbar-wrapper">
        <Typography className="navbar-title" variant="h4" component="div">
          FaceBook-Clone
        </Typography>
        <Button onClick={handleLogout} color="inherit">
          Logout
        </Button>
      </AppBar>
      <div className="home-content">
        <Feed
          username={username}
          setOpenModal={setOpenModal}
          openModal={openModal}
        />
      </div>
      <Fab onClick={toggleModal} className="modal-btn" color="primary">
        {openModal ? "Close" : "Open"}
      </Fab>
    </div>
  );
};

export default Home;
