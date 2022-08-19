import React from 'react'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import './Login.css'

const Login = () => {
  return (
    <div className="login-warpper">
        <Paper className='login-box' elevation={10}>
            <form action="" className="login-form"></form>
            <TextField />
        </Paper>
    </div>
  )
}

export default Login