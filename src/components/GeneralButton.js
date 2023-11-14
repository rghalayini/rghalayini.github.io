import React from "react";
import { Button } from "@mui/material";
import PropTypes from "prop-types";
import DownloadIcon from "@mui/icons-material/Download";
const GeneralButton = ({
  label,
  url,
  downloadFunction,
  onClick,
  download,
  externalLink,
}) => {
  return (
    <>
      {download ? (
        <Button
          variant="contained"
          onClick={onClick}
          rel="noopener noreferrer"
          target="_blank"
          endIcon={<DownloadIcon />}
          download={true}
          href={url}
        >
          {label}
        </Button>
      ) : (
        <Button
          variant="contained"
          download={downloadFunction}
          onClick={onClick}
          href={url}
          target={externalLink ? "_blank" : "_self"}
        >
          {label}
        </Button>
      )}
    </>
  );
};

GeneralButton.propTypes = {
  label: PropTypes.string.isRequired,
  downloadFunction: PropTypes.bool,
  onClick: PropTypes.func,
  url: PropTypes.string,
  download: PropTypes.bool,
  externalLink: PropTypes.bool,
};
GeneralButton.defaultProps = {
  downloadFunction: false,
  onClick: undefined,
  url: undefined,
  download: false,
  externalLink: false,
};

export default GeneralButton;
