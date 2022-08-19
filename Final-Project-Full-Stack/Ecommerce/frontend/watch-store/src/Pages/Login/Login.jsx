import React, { useEffect, useContext} from 'react';
import { Button, TextField, Box, Alert} from "@mui/material"
import './Login.css';
import {useForm} from "react-hook-form"
import axios from 'axios';
import { Store } from '../../store';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate()

  const {register, handleSubmit, formState: { errors }} = useForm();

  const { state, dispatch: ctxDispatch} = useContext(Store);
  const { userInfo } = state;


  const onSubmit = async (user) => {
    try {
      
      const {data} = await axios.post(`${process.env.REACT_APP_API_URL}/api/user/login`, {
        email: user.email,
        password: user.password,
      })
      ctxDispatch({type: 'USER_SIGN_IN', payload: data})
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/');
    } catch (error) {
      
      Alert.error(error);
    }
  }


  useEffect(() => {
    if(!userInfo) {
      navigate("/login")
    }
  }, [navigate, userInfo])


  return (
    <div className="login-warper">
        <Box className="Login">
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign in</h1>
            <TextField
            {...register("email")}
        id="outlined-password-input"
        label="Email"
        type="text"
        autoComplete="current-password"
        /><br/>
        {errors.Email && <p>{errors.Email.message}</p>}
                <TextField
                {...register("password")}
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        />
        {errors.password && <p>{errors.password.message}</p>}
        <Button type="submit" variant="contained" className="button-login">Login</Button>
            <strong>OR</strong>
            <Button type="submit" color="secondary" variant="contained" onClick={() => navigate("/register")} className="button-login">register</Button>
            </form>
        </Box>
    </div>
  )
}

export default Login