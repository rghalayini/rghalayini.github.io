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
  fontStyle: {
    color: theme.palette.grey.dark,
  },
};

const BlockHeader = ({ text, subHeader }) => {
  const firstThreeChars = text.slice(0, 3); // Get the first three characters

  return (
    <>
      <Typography variant="h3" sx={styles.fontStyle}>
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
};
BlockHeader.defaultProps = {
  subHeader: undefined,
};

export default BlockHeader;
