import React from "react";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import TopMenu from "./TopMenu";
import theme from "../theme";
const styles = {
  container: {
    //marginTop: { xs: "48px", sm: "64px" },
    paddingTop: { xs: "48px", sm: "64px" }, // Adjust padding-top for different screen sizes
    minHeight: "100vh", // Ensure the container is at least 100vh
  },
  fullPage: {
    //width: "100vw",
    //height: "100vh",
  },
};
const Layout = ({
  children,
  backgroundColor,
  fullPage,
  maxWidth,
  noMarginBottom,
}) => {
  const layoutStyles = {
    ...styles.container,
    ...(backgroundColor ? { backgroundColor: backgroundColor } : {}),
    ...(fullPage ? styles.fullPage : {}),
    ...(noMarginBottom ? { marginBottom: 0 } : { marginBottom: "15vh" }),
  };

  return (
    <>
      <Container maxWidth={maxWidth} sx={layoutStyles}>
        <TopMenu />

        {children}
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  fullPage: PropTypes.bool,
  maxWidth: PropTypes.string,
  noMarginBottom: PropTypes.bool,
};
Layout.defaultProps = {
  backgroundColor: theme.palette.grey.white,
  fullPage: false,
  maxWidth: "lg",
  noMarginBottom: false,
};

export default Layout;
