import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";

const GeneralButton = ({ label, url, downloadFunction, onClick }) => {
  return (
    <>
      <Button
        variant="contained"
        download={downloadFunction}
        onClick={onClick}
        href={url}
        target="_self"
      >
        {label}
      </Button>
    </>
  );
};

GeneralButton.propTypes = {
  label: PropTypes.string.isRequired,
  downloadFunction: PropTypes.bool,
  onClick: PropTypes.func,
  url: PropTypes.string,
};
GeneralButton.defaultProps = {
  downloadFunction: false,
  onClick: undefined,
  url: undefined,
};

export default GeneralButton;
