import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#303030", // This is the default background color
      paper: "#424242", // This is the background color for Paper components
    },
    primary: {
      light: "#595959",
      main: "#616161",
    },
    secondary: {
      main: "#4fc3f7",
    },
    error: {
      main: "#d32f2f",
    },
    success: {
      main: "#4caf50",
    },
    divider: "#9e9e9e",
  },
});

export default theme;
