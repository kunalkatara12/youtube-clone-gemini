import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Sidebar, Videos, Navbar } from "./";
import { useState, useEffect } from "react";
const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  
  // const [closableState, setClosableState] = useState(false);



  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>{
    console.log(data.items)
      setVideos(data.items)
    }
    );
  }, [selectedCategory]);
  return (
    <>
      <Navbar />
      <Stack
        sx={{
          flexDirection: {
            sx: "column",
            md: "row",
          },
        }}
      >
        <Box
          sx={{
            height: { sx: "auto", md: "92vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />

          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#196320" }}
          >
            Copyright 2022
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            mb={2}
            fontWeight="bold"
            sx={{ color: "white" }}
          >
            {selectedCategory} <span style={{ color: "#196320" }}>videos</span>
          </Typography>

          <Videos videos={videos} />

          {/*         
        <button onClick={() => setClosableState((prev) => !prev)}>
          Open button
        </button>
        <RCComponent
          isClosable={true}
          setClosableState={setClosableState}
          moreOpts={true}
          width="100%"
          height="40vh"
          GOOGLE_CLIENT_ID={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          host={"http://localhost:3000"}
          roomId={"GENERAL"}
          channelName="Customer Service"
          anonymousMode={false}
          showAvatar={false}
        /> */}
        </Box>
      </Stack>
    </>
  );
};

export default Feed;
