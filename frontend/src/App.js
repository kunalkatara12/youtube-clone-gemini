import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Feed,
  LoginBox,
  SignupBox,
} from "./components";
import { PrivateRoute } from "./utils/PrivateRoute";
const App = () => (
  <BrowserRouter>
    <Box sx={{ backgroundColor: "#62cc74" }}>
      <Routes>
        {/* <Route exact path="/" element={<PrivateRoute />}> */}
          <Route path="/" exact element={<Feed />} />
        {/* </Route> */}
        {/* <Route exact path="/video/:id" element={<PrivateRoute />}> */}
          <Route path="/video/:id" exact element={<VideoDetail />} />
        {/* </Route> */}
        {/* <Route exact path="/channel/:id" element={<PrivateRoute />}> */}
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
        {/* </Route> */}
        {/* <Route exact path="/search/:searchTerm" element={<PrivateRoute />}> */}
          <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
        {/* </Route> */}
        <Route path="/loginpage" exact element={<LoginBox />}>
          {" "}
        </Route>
        <Route path="/signuppage" exact element={<SignupBox />}>
          {" "}
        </Route>
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
