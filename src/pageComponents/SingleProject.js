import React from "react";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";
import theme from "../theme";
import { Box, Typography } from "@mui/material";

const styles = {
  svgBox: {
    width: { xs: "100%", sm: "400px" },
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    width: "80%",
  },
  image: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: theme.palette.grey.white,
  },
};

const SingleProject = ({ url, color, image, text }) => {
  //  url can be of type: "/your-destination-url"
  const backgroundColor = {
    backgroundColor: color,
  };

  return (
    <Link to={url}>
      <Box sx={{ ...styles.svgBox, ...backgroundColor }}>
        {image && (
          <Box component="svg" viewBox="0 0 100 100" sx={styles.svg}>
            <image
              href={image}
              width="100%"
              height="100%"
              style={styles.image}
            />
          </Box>
        )}

        {text && (
          <Typography sx={styles.text} variant="h4">
            {text}
          </Typography>
        )}
      </Box>
    </Link>
  );
};

SingleProject.propTypes = {
  url: Proptypes.string.isRequired,
  color: Proptypes.string,
  image: Proptypes.string,
  text: Proptypes.string,
};
SingleProject.defaultProps = {
  color: theme.palette.primary.main,
  text: undefined,
  image: undefined,
};

export default SingleProject;
