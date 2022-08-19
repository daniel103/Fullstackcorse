import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
  TextField,
  Paper,
} from "@mui/material";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { showErrorMessage } from "../../utils/showMessage";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ users, setUser }) => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  function handleRememberMeCheckbox() {
    setRememberMe(!rememberMe);
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  function handleInputChange(e) {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    const existUser = users.find(
      (user) => user.username === formValue.username
    );
    if (!existUser) {
      showErrorMessage("User Doesn't Exist");
    } else if (existUser.password !== formValue.password) {
      showErrorMessage("Password Doesn't Match");
    } else {
      setUser(existUser);

      if (rememberMe) {
        existUser.password = "*****";
        const jsonUser = JSON.stringify(existUser);
        localStorage.setItem("user", jsonUser);
      }

      navigate("/home");
    }
  }

  function handleRegisterClick() {
    navigate("/register");
  }

  return (
    <div className="login-wrapper">
      <Paper className="login-box" elevation={10}>
        <h1 className="login-title">Welcome To Our App</h1>
        <form onSubmit={handleLogin} className="login-form">
          <TextField
            onChange={handleInputChange}
            className="login-input"
            label="username"
            variant="outlined"
            name="username"
            required
          />
          <div className="password-input-wrapper">
            <TextField
              onChange={handleInputChange}
              className="login-input"
              label="password"
              variant="outlined"
              name="password"
              required
              type={showPassword ? "text" : "password"}
            />
            <div onClick={handleShowPassword} className="password-icon">
              {showPassword ? (
                <FaEyeSlash fontSize={40} />
              ) : (
                <FaEye fontSize={40} />
              )}
            </div>
          </div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleRememberMeCheckbox} />}
              label="Remember me"
            />
          </FormGroup>
          <div className="login-buttons">
            <Button type="Submit" variant="contained">
              Login
            </Button>
            <Button onClick={handleRegisterClick} variant="outlined">
              Register
            </Button>
          </div>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
