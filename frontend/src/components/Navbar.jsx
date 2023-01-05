import { Button, Stack, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    style={{ zIndex: 2, backgroundColor: "#196320" }}
    sx={{
      position: "sticky",
      background: "#196320",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
    <Box
      style={{ width: "15vw", display: "flex", justifyContent: "space-around" }}
    >
      <Link to="/loginpage">
        <Button variant="contained">Login</Button>
      </Link>{" "}
      <Link to="/signuppage">
        <Button variant="contained">Signup</Button>
      </Link>
    </Box>
  </Stack>
);

export default Navbar;
