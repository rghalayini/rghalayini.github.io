import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { TextMargin } from "../library/Constants";

const BlockHeader = ({ text, subHeader }) => {
  return (
    <>
      <Typography variant="h3">{text}</Typography>
      <Typography variant="h6" sx={TextMargin}>
        {subHeader}
      </Typography>
    </>
  );
};

BlockHeader.propTypes = {
  text: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
};
BlockHeader.defaultProps = {
  subHeader: undefined,
};

export default BlockHeader;
