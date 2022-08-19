import React from "react";
import { useForm } from "react-hook-form";
import { Paper, Box, Button, Grid, Typography } from "@mui/material";
import FormInput from "../../components/FormInput/FormInput";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import { fireAlert } from "../../utils/Alert";

const formInputs = [
  { label: "First name", inputName: "firstName" },
  { label: "Last name", inputName: "lastName" },
  { label: "Username", inputName: "username" },
  { label: "Email", inputName: "email", type: "email" },
  { label: "Password", inputName: "password", type: "password" },
  { label: "Repeat password", inputName: "repeatPassword", type: "password" },
];

const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await AuthService.register(data);
      fireAlert("Created Successfully");
    } catch (err) {
      fireAlert(err.response.data.message, true);
    }
  };

  return (
    <Box className="register-page-container">
      <Paper elevation={3} className="register-form-wrapper">
        <Typography align="center" variant="h3" gutterBottom component="div">
          Start your journey here
        </Typography>
        <form
          className="register-form-container"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            {formInputs.map((input, i) => (
              <Grid
                key={i}
                className="register-form-input"
                item
                xs={12}
                md={6}
                lg={4}
              >
                <FormInput
                  key={i}
                  {...input}
                  register={register}
                  errors={errors}
                />
              </Grid>
            ))}
          </Grid>
          <div className="register-form-submit-btn-wrapper">
            <Button variant="contained" type="submit">
              Submit
            </Button>
            <Link className="register-page-login-link" to="/login">
              <Button variant="outlined">Have account? Login</Button>
            </Link>
          </div>
        </form>
      </Paper>
    </Box>
  );
};

export default RegisterPage;
