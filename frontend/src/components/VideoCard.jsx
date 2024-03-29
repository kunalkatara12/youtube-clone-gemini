import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import {
  demoThumbnailUrl,
  demoChannelTitle,
  demoVideoTitle,
  demoChannelUrl,
  demoVideoUrl,
} from "../utils/constants";
import { CheckCircle } from "@mui/icons-material";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <Card
    sx={{
      width: { xs: "100%", md: "320px" },
      boxShadow: "none",
      borderRadius: "8px",
      border: "5px solid #196320",
    }}
  >
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
        sx={{
          width: { xs: "100%", sm: "358px", md: "320px" },
          height: 200,
          // border: "2px solid black",
          // borderRadius:"5px"
        }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link
        to={
          snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" fontWeight="bold" color="#gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
