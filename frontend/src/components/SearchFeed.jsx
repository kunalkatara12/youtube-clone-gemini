import React from "react";
import {  Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import {  Videos ,Navbar} from "./";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  // const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  const {searchTerm}=useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      console.log(data.items);
      setVideos(data.items);
    });
  }, [searchTerm]);
  return (
       <>
    <Navbar />
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" mb={2} fontWeight="bold" sx={{ color: "white" }}>
        Search Result for:{" "}
        <span style={{ color: "#196320" }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
    </>
  );
};

export default SearchFeed;
