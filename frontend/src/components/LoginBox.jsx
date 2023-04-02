import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";

function Copyright(props) {
  const navigate = useNavigate();
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link
        color="inherit"
        onClick={() => {
          navigate("/");
        }}
      >
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const theme = createTheme();

export default function LoginBox() {
  const auth = getAuth();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    signInWithEmailAndPassword(auth, data.get("email"), data.get("password"))
      .then((res) => {
        console.log(res.user);
         navigate("/")
      })
      .catch((err) => {
        alert("Something wrong occured")
        console.log(err);
      });
    event.preventDefault();
  };

  return (
    // <ThemeProvider theme={theme}>
    <Box
      // component="main"
      // maxWidth="xs"
      style={{ marginTop: 0, height: "100vh" }}
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          paddingTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            margin="normal"
            required
            style={{ width: "70%" }}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            style={{ width: "70%" }}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            style={{ width: "60%" }}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            LogIn
          </Button>
          <Grid container>
            <Grid item xs>
              <Button onClick={() => navigate("/forget-pass")}>
                Forgot password?
              </Button>
            </Grid>
            <Grid item>
              <Button onClick={() => navigate("/signuppage")}>
                {"Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Box>
    // </ThemeProvider>
  );
}

// import { Box } from "@mui/material";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// function LoginBox() {
//   // useState;
//   const [emailValue, setEmailValue] = useState("");
//   const [passwordValue, setPasswordValue] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const onLoginClicked = async () => {
//     alert("Login cLicked");
//   };
//   const navigate = useNavigate();
//   return (
//     <Box minHeight="95vh">
//      <div className="content_Login">
//       <h1>Login</h1>
//       {!errorMessage && <div className="fail"> {errorMessage}</div>}
//       <input
//         type="text"
//         value={emailValue}
//         onChange={(e) => setEmailValue(e.target.value)}
//         placeholder="someone@gmail.com"
//       />
//       <input
//         type="text"
//         value={passwordValue}
//         onChange={(e) => setPasswordValue(e.target.value)}
//       />
//       <button
//         disabled={!emailValue || !passwordValue}
//         // onClick={onLoginClicked()}
//       >
//         Login
//       </button>
//       <button onClick={() => navigate("/forget-pass")}>Forget Password</button>
//       <button onClick={() => navigate("/signup")}>
//         Don't have an account? Signup
//       </button>
//     </div>
//   </Box>
//   )
// }

// export default LoginBox;
