import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetails, setChannelDetails] = useState();
  const [video, setVideo] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetails(data?.items[0]);

      const videoData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );
      setVideo(videoData?.items);
    };

    fetchdata();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(2,36,0,1) 0%, rgba(46,9,121,1) 50%, rgba(0,189,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetails={channelDetails} marginTop="-110px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Videos videos={video} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
