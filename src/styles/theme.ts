// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#008B8B" },
    secondary: { main: "#20B2AA" },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    caption: { color: "#555555" },
  },
});

export default theme;
