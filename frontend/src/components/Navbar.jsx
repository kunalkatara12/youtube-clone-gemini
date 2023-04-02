import { Button, Stack, Box, Avatar, Tooltip } from "@mui/material";
import React, { useEffect,useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
import { getAuth} from "firebase/auth";

const Navbar = () => {
  const auth = getAuth();
  const user =  auth.currentUser;
  const [currUser, setCurrUser] =useState("user");
  useEffect(() => {
    if (user !== null) {
      setCurrUser(user.email);
    }
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/loginpage");
  };
  return (
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
        style={{
          width: "15vw",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* <Link to="/loginpage"> */}
        <Stack direction="row" spacing={2}>
          <Tooltip title={currUser}>
            <Avatar>{currUser.at(0).toUpperCase()}</Avatar>
          </Tooltip>

          <Button variant="contained" onClick={handleLogout}>
            Logout
          </Button>
        </Stack>

        {/* </Link>{" "} */}
        {/* <Link to="/signuppage">
        <Button variant="contained">Signup</Button>
      </Link> */}
      </Box>
    </Stack>
  );
};

export default Navbar;
