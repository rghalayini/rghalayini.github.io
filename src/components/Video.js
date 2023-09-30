import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

const Video = ({ id }) => {
  return (
    <Box sx={{ width: "100%", paddingTop: "56.25%", position: "relative" }}>
      <iframe
        title="YouTube Video"
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allowFullScreen
        style={{ position: "absolute", top: 0, left: 0 }}
      ></iframe>
    </Box>
  );
};

Video.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Video;
