import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "lato",
    body1: {
      fontWeight: 500,
    },
    h1: {
      fontWeight: 700,
      // lineHeight: "100%",
    },

    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 700,
    },
    h6: {
      fontWeight: 500,
    },
  },
  palette: {
    // blue
    primary: {
      main: "#164df2",
      medium: "#486cd9",
      purple: " #5a73bf",
    },
    // green
    secondary: {
      main: "#3df2e0",
    },
    black: {
      deepSpaceBlack: "#000000",
    },
    grey: {
      dark: "#84888c",
      medium: "#babcbf",
      light: "#f2f2f2",
      white: "#f8fcff",
    },
  },
});

export default theme;
