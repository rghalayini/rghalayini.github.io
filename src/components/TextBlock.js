import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { TextMargin } from "../library/Constants";
import PropTypes from "prop-types";
import Video from "./Video";

const styles = {
  image: {
    width: "100%",
  },
};
const TextBlock = ({ text, text2, image, videoId }) => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={image || videoId ? 8 : 12}>
        <Typography variant="body1" sx={TextMargin}>
          {text}
        </Typography>
        {text2 && (
          <Typography variant="body1" sx={TextMargin}>
            {text2}
          </Typography>
        )}
      </Grid>
      {image && (
        <Grid item xs={12} sm={4}>
          <Box component="img" src={image} sx={styles.image} />
        </Grid>
      )}
      {videoId && (
        <Grid item xs={12} sm={4}>
          <Video id={videoId} />
        </Grid>
      )}
    </Grid>
  );
};

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  text2: PropTypes.string,
  image: PropTypes.object,
  videoId: PropTypes.string,
};
TextBlock.defaultProps = {
  text2: undefined,
  image: undefined,
  videoId: undefined,
};

export default TextBlock;
