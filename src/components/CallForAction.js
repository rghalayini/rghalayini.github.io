import React from "react";
import { Box } from "@mui/material";
import GeneralButton from "./GeneralButton";
import PropTypes from "prop-types";

const styles = {
  button: {
    witdh: "100%",
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
  },
};

const CallForAction = ({ label, url }) => {
  return (
    <Box sx={styles.button}>
      <GeneralButton label={label} url={url} />
    </Box>
  );
};

CallForAction.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default CallForAction;
