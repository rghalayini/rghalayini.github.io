import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import theme from "../theme";

const TextHeader = {
  marginBottom: "20px",
  color: theme.palette.primary.medium,
};

const BlockSubHeader = ({ text }) => {
  return (
    <Typography variant="h5" sx={TextHeader}>
      {text}
    </Typography>
  );
};

BlockSubHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BlockSubHeader;
