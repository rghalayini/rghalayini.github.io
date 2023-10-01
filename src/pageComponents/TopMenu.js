import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import CodeIcon from "@mui/icons-material/Code";
import theme from "../theme";

const styles = {
  toolbar: {
    justifyContent: "space-between",
  },
  titleBox: {
    display: { xs: "none", md: "flex" },
    marginRight: "60px",
    alignItems: "center",
  },
  icon: {
    color: theme.palette.grey.dark,
    mr: 3,
  },
  title: {
    mr: 2,
    fontWeight: 700,
    color: theme.palette.grey.dark,
    textDecoration: "none",
    fontFamily: "Bebas Neue, sans-serif",
    letterSpacing: "0.3em",
  },
  menuBox: {
    display: { xs: "none", md: "flex" },
  },
  menuItem: {
    my: 2,
    color: theme.palette.grey.dark,
    display: "block",
  },
};

const pages = [
  {
    pageName: "Work",
    url: "/",
  },
  {
    pageName: "About me",
    url: "/about",
  },
  {
    pageName: "Contact",
    url: "/contact",
  },
  {
    pageName: "Resume",
    url: "/my-resume",
  },
];
const handleClick = (url) => {
  window.location.href = url;
};
const ResponsiveAppBar = () => {
  return (
    <AppBar position="fixed" color="grey">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={styles.toolbar}>
          <Box sx={styles.titleBox}>
            <CodeIcon sx={styles.icon} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="/"
              sx={styles.title}
            >
              Rémy Ghalayini
            </Typography>
          </Box>
          <Box sx={styles.menuBox}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleClick(page.url)}
                sx={styles.menuItem}
              >
                {page.pageName}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
