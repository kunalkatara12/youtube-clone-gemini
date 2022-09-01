import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box  } from "@mui/material";
const App = () => {
 <BrowserRouter>
<Box sx={{backgroundColor:'#000'}}>
  <NavBar>
    <Routes>
      <Route path='/' exact element={<Feed/>}></Route>
      <Route path='/video/:id' exact element={<VideoDetail/>}></Route>
      <Route path='/channel/:id' exact element={<ChannelDetail/>}></Route>
      <Route path='/search/:searchTerm' exact element={<SearchFeed/>}></Route>
    </Routes>
  </NavBar>
</Box>
 </BrowserRouter>
}

export default App