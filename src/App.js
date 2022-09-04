import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
} from "./components";
const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#000" }}>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" exact element={<VideoDetail />}></Route>
          <Route path="/channel/:id" exact element={<ChannelDetail />}></Route>
          <Route
            path="/search/:searchTerm"
            exact
            element={<SearchFeed />}
          ></Route>
        </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
