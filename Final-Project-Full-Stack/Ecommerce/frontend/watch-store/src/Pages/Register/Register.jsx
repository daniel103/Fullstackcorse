import React from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import {Box, TextField, Button} from '@mui/material';
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { fireAlert } from "../../utils/Alert"
import { useNavigate } from 'react-router-dom';
import './Register.css'
import axios from 'axios';

const Register = () => {
  let navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
      } = useForm({
        mode: 'onTouched'
      });
      const onSubmit = async (data) => {
        try {
          reset();
          const res = await axios.post(`${process.env.REACT_APP_API_URL}/api/user`, data)
          fireAlert("Created Successfully");
          navigate("/login")
        } catch (error) {
          console.log(error)
        }
      }; 

      const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

      const handleConfirmPasswordClick = () => {
        setConfirmPasswordEye(!confirmPasswordEye);
      };

      const password = watch("password");

  return (
    <div className="Register-container">
  <Box className="box">
    <h1>register</h1>
        <form className="text-field" onSubmit={handleSubmit(onSubmit)}>
        <TextField
    {...register("firstName", {required: "first name is required" })}
    id="outlined-password-input"
    label="firstName"
    type="text"
    autoComplete="current-password"
    className="TextFiled"
    />
    {errors.firstName && <p>{errors.firstName.message}</p>}
        <TextField
    {...register('lastName', {required: "last name is required"})}
          id="outlined-password-input"
          label="lastName"
          type="text"
          autoComplete="current-password"
          className="TextFiled"
        /><br />
      {errors.lastName && <p>{errors.lastName.message}</p>}

  <TextField
    {...register('username', {required: "username is required" })}
          id="outlined-password-input"
          label="username"
          type="text"
          autoComplete="current-password"
          className="TextFiled"
        />
            {errors.username && <p>{errors.username.message}</p>}

          <TextField
          {...register('email', {required: "email is required"})}
          id="outlined-password-input"
          label="email"
          type="email"
          autoComplete="current-password"
          className="TextFiled"
        />
        {errors.email && <p>{errors.email.message}</p>}
          <TextField
          {...register('password', {required: "password is required"})}
          id="outlined-password-input"
          label="password"
          type={confirmPasswordEye === false ? "password" : "text"}
          autoComplete="current-password"
          className="TextFiled"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <div className="eye">
                    {confirmPasswordEye === false ? (
                      <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
                    ) : (
                      <AiFillEye onClick={handleConfirmPasswordClick} />
                    )}
                  </div>
         <TextField
         {...register('confirmPassword', {required: "confirm password is required", 
         validate: (value) => 
          value === password || "The password do not match",
        })}
          id="outlined-password-input"
          label="confirm Password"
          type={confirmPasswordEye === false ? "password" : "text"}
          autoComplete="current-password"
          className="TextFiled"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <div className="eye">
                    {confirmPasswordEye === false ? (
                      <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
                    ) : (
                      <AiFillEye onClick={handleConfirmPasswordClick} />
                    )}
                  </div>
        <Button type="submit" variant="contained" color="success" className="Button-register">Create New User</Button>
        </form>
        <Button variant="outlined" className="login-btn" onClick={() => navigate("/login")}>Login</Button>
    </Box>
    </div>
  )
}

export default Register