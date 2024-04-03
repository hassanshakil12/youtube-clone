import React from "react";
import { Link } from "react-router-dom";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { demoProfilePicture } from "../utils/constant";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const ChannelCard = ({ channelDetails, marginTop }) => {
  console.log(channelDetails);
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "356px", md: "320px" },
        height: "326px",
        margin: "auto",
        marginTop
      }}
    >
      <Link to={`/channel/${channelDetails?.id?.channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetails?.snippet?.title}
            sx={{
              borderRadius: "50%",
              width: "180px",
              height: "180px",
              mb: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.title}
            <CheckCircleIcon
              sx={{ fontSize: "15px", color: "gray", ml: "5px" }}
            />
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography
              sx={{ fontSize: "15px", color: "gray", fontWeight: 500 }}
            >
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString("en-US")}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
