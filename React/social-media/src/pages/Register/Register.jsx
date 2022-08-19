import React, { useState, useEffect } from "react";
import {
  TextField,
  Paper,
  Button,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import { showSuccessMessage } from "../../utils/showMessage";
import "./Register.css";

const initErrors = {
  username: "",
  password: "",
  confirmPassword: "",
};

const Register = ({ users, createNewUser }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValue, setFormValue] = useState({});
  const [errors, setErrors] = useState(initErrors);
  const [inValid, setInValid] = useState(false);
  const [doesSubmitted, setDoesSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  function usernameExist(username) {
    let errorMessage = "Username Already Exist";
    const exist = users.find((user) => user.username === username);
    if (exist) {
      setErrors({ ...errors, username: errorMessage });
    }
  }

  function isPasswordMatch(password, confirm) {
    let errorMessage = "Passwords needs to be match";
    if (password !== confirm) {
      setErrors({
        ...errors,
        password: errorMessage,
        confirmPassword: errorMessage,
      });
    }
  }

  function isPasswordLengthValid(password) {
    let errorMessage = "Password length needs to be more then 6";
    if (password.length < 6) {
      setErrors({
        ...errors,
        password: errorMessage,
      });
    }
  }

  function isPasswordValid(password) {
    let errorMessage = "Password must contains at least 1 letters and 1 number";
    let regex = new RegExp("^(?=.*[a-z])(?=.*[0-9])");
    if (!regex.test(password)) {
      setErrors({
        ...errors,
        password: errorMessage,
      });
    }
  }

  useEffect(() => {
    setErrors(initErrors);
  }, [formValue]);

  useEffect(() => {
    for (let key in errors) {
      if (Boolean(errors[key])) setInValid(true);
    }
  }, [errors]);

  useEffect(() => {
    if (!inValid && doesSubmitted) {
      createNewUser(formValue.username, formValue.password);
      showSuccessMessage("New user create successfully");
    }
  }, [doesSubmitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password, confirmPassword } = formValue;

    usernameExist(username);
    isPasswordMatch(password, confirmPassword);
    isPasswordLengthValid(password);
    isPasswordValid(password);

    setDoesSubmitted(true);
  };

  return (
    <div className="register-wrapper">
      <Paper className="register-box" elevation={10}>
        <form onSubmit={handleSubmit} className="register-form">
          <h1 className="register-title">Let's Start Here</h1>
          <TextField
            onChange={handleInputChange}
            name="username"
            label="Username"
            error={Boolean(errors.username)}
            helperText={errors.username}
            required
          />
          <TextField
            onChange={handleInputChange}
            type={showPassword ? "text" : "password"}
            name="password"
            label="Password"
            error={Boolean(errors.password)}
            helperText={errors.password}
            required
          />
          <TextField
            onChange={handleInputChange}
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            label="Confirm Password"
            error={Boolean(errors.confirmPassword)}
            helperText={errors.confirmPassword}
            required
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox onChange={handleShowPassword} />}
              label="Show Passwords"
            />
          </FormGroup>
          <Button type="submit" variant="contained">
            Create new user
          </Button>
          <Link className="register-login-link" to="/login">
            Already Have Account? Back to login
          </Link>
        </form>
      </Paper>
    </div>
  );
};

export default Register;
