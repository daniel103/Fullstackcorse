import React, { useState } from "react";
import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../../services/AuthService";
import "./LoginPage.css";

const LoginPage = ({ setIsAuth, isAuth }) => {
  let navigate = useNavigate();
  const [formValue, setFormValue] = useState({});
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setFormValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const { data } = await AuthService.login(
        formValue.username,
        formValue.password
      );
      console.log(data);
      if (data.status === "success") {
        setIsAuth(true);
        navigate("/book");
      }
    } catch (err) {
      const { data } = err.response;
      if (data.status === "error") {
        // send sweet alert with "server is down" message
      } else {
        setError(data.message);
      }
    }
  };

  return (
    <Box className="login-page-wrapper">
      <Paper className="login-page-container" elevation={3}>
        <Typography align="center" variant="h4" component="h4">
          Login In Order To See The Magic
        </Typography>
        <form onSubmit={handleLogin} className="login-page-from">
          <TextField
            onChange={handleInputChange}
            name="username"
            label="username"
            type="text"
            required
            error={Boolean(error)}
          />
          <TextField
            onChange={handleInputChange}
            name="password"
            label="password"
            type="password"
            required
            error={Boolean(error)}
            helperText={error}
          />
          <Button variant="contained" type="submit">
            Login
          </Button>
          <Link className="login-page-register-link" to="/register">
            Don't Have account, click here
          </Link>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
