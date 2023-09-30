import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Open Sans, sans-serif",
    body1: {
      fontWeight: 500,
    },
    h1: {
      fontWeight: 700,
      // lineHeight: "100%",
      fontFamily: "Bebas Neue, sans-serif",
    },

    h2: {
      fontWeight: 700,
      fontFamily: "Bebas Neue, sans-serif",
    },
    h3: {
      fontWeight: 700,
      fontFamily: "Bebas Neue, sans-serif",
      letterSpacing: "0.1em",
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
      main: "#A8C893",
    },
    black: {
      deepSpaceBlack: "#000000",
    },
    grey: {
      dark: "#484649",
      medium: "#DCDCDF",
      white: "#f8fcff",
    },
  },
});

export default theme;
