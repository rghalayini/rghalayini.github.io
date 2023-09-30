import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import theme from "../theme";

const styles = {
  textHeader: {
    marginBottom: "20px",
    color: theme.palette.primary.medium,
  },
  margin: {
    marginTop: "40px",
  },
};

const BlockSubHeader = ({ text, moreMargin }) => {
  return (
    <Typography
      variant="h5"
      sx={
        moreMargin
          ? { ...styles.textHeader, ...styles.margin }
          : styles.textHeader
      }
    >
      {text}
    </Typography>
  );
};

BlockSubHeader.propTypes = {
  text: PropTypes.string.isRequired,
  moreMargin: PropTypes.bool,
};
BlockSubHeader.defaultProps = {
  moreMargin: false,
};

export default BlockSubHeader;
