import React from "react";
import { Box } from "@mui/system";
import Globhe from "../images/63a4404bcc9a62ad79fc3751_Globhe_logotype_2022_white.svg";
import { Link } from "react-router-dom";
import Proptypes from "prop-types";

const styles = {
  svg: {
    backgroundColor: "black",
    width: 100,
    height: 100,
    padding: "10px",
  },
};

const SingleProject = ({ url }) => {
  //  url can be of type: "/your-destination-url"

  return (
    <Link to={url}>
      <Box component="svg" viewBox="0 0 100 100" sx={styles.svg}>
        <image href={Globhe} width="100%" height="100%" />
      </Box>
    </Link>
  );
};

SingleProject.propTypes = {
  url: Proptypes.string.isRequired,
};

export default SingleProject;
