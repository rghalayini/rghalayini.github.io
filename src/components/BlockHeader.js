import React from "react";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { TextMargin } from "../library/Constants";
import theme from "../theme";

const styles = {
  underline: {
    textDecoration: "underline",
    textUnderlineOffset: "0.2em",
  },
  colorGrey: {
    color: theme.palette.grey.dark,
  },
  colorGreen: {
    color: theme.palette.primary.main,
  },
};

const BlockHeader = ({ text, subHeader, green, variant }) => {
  const firstThreeChars = text.slice(0, 3); // Get the first three characters

  return (
    <>
      <Typography
        variant={variant}
        sx={green ? styles.colorGreen : styles.colorGrey}
      >
        <span style={styles.underline}>{firstThreeChars}</span>
        {text.slice(3)} {/* Display the remaining text */}
        {/* {text} */}
      </Typography>
      <Typography variant="h6" sx={TextMargin}>
        {subHeader}
      </Typography>
    </>
  );
};

BlockHeader.propTypes = {
  text: PropTypes.string.isRequired,
  subHeader: PropTypes.string,
  green: PropTypes.bool,
  variant: PropTypes.string,
};
BlockHeader.defaultProps = {
  subHeader: undefined,
  green: false,
  variant: "h4",
};

export default BlockHeader;
