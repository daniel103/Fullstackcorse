import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { TextField, Button } from "@mui/material";
import "./Modal.css";

const Modal = ({ addNewPost }) => {
  const [inputVal, setInputVal] = useState({});

  function handleInputChange(event) {
    setInputVal({ ...inputVal, [event.target.name]: event.target.value });
  }

  const handleCreateClick = () => {
    addNewPost(inputVal?.image, inputVal?.description);
  };

  return (
    <div className="modal-layout">
      <Paper className="modal-content">
        <h2>Add New Post</h2>

        <TextField
          name="image"
          onChange={handleInputChange}
          label="Image Url"
        />

        <TextField
          name="description"
          onChange={handleInputChange}
          label="Description"
        />

        <Button onClick={handleCreateClick} variant="contained">
          Create
        </Button>
      </Paper>
    </div>
  );
};

export default Modal;
