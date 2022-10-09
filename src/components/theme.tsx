import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    primary: string;
    secondary: string;
    hover: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    primary: string;
    secondary: string;
    hover: string;
  }
}

export const themeComfy = createTheme({
  primary: "#69B12A",
  secondary: "#589624",
  hover: "#64A924"
});
