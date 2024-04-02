import React from "react";
import { Link } from "react-router-dom";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constant.js";

const VideoCard = ({ video }) => (
  <Card sx={{ width: { md: "319px", xs: "100%" } }}>
    <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={video?.snippet?.title}
        sx={{ width: "100%", height: "180px" }}
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1e1e1e", height: "80px" }}>
      <Link to={video.id.videoId ? `/video/${video.id.videoId}` : demoVideoUrl}>
        <Typography variant="subtitle1" fontWeight="bold" color="white">
          {video?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 50)}
        </Typography>
      </Link>
      <Link
        to={
          video?.snippet?.channelId
            ? `/channel/${video?.snippet?.channelId}`
            : demoChannelUrl
        }
      >
        <Typography variant="subtitle2" color="gray">
          {video?.snippet?.channelTitle || demoVideoTitle}
          <CheckCircleIcon
            sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
          />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard;
