import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia } from "@mui/material";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoChannelUrl,
  demoVideoUrl,
} from "../utils/constants";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
      />
    </Link>
    <CardContent sx={{backgroundColor:"#1e1e1e", height:"106px"}}/>
  </Card>
);

export default VideoCard;
