import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { TextMargin } from "../library/Constants";

const BlockHeader = ({ text }) => {
  return (
    <Typography variant="h3" sx={TextMargin}>
      {text}
    </Typography>
  );
};

BlockHeader.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BlockHeader;
