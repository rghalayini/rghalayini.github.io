import React from "react";
import { Container } from "@mui/material";
import PropTypes from "prop-types";
import TopMenu from "./TopMenu";

const styles = {
  container: {
    marginTop: "20vh",
    marginBottom: "15vh",
  },
};

const Layout = ({ children }) => {
  return (
    <>
      <TopMenu />
      <Container maxWidth="lg" sx={styles.container}>
        {children}
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
