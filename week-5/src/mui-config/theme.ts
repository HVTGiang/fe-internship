import { createTheme } from "@mui/material/styles";
import { ThemeOptions as ThemeOptionsOld } from "@mui/material/styles/createTheme";

// Custom theme: Colors
const themeColors = {
  color: {
    black39: `#393E46`,
    green26: "#264653",
    green2A: "#2A9D8F",
    saffron: "E9C46A",
    greyF7: "#F7F7F7",
    redFF: "#FF784F",
    blue60: "#60AFFF",
    white: "#FFFFFF"
  },
} as const;

// Override style Mui
const themeOptions: ThemeOptionsOld = {
  ...themeColors,
  palette: {
    primary: {
      main: themeColors.color.black39,
    },
    secondary: {
      main: themeColors.color.green26,
    },
    error: {
      main: themeColors.color.redFF,
    },
    info: {
      main: themeColors.color.blue60,
    },
    success: {
      main: themeColors.color.green2A,
    },
  },
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
};

// Update for Typescript
type CustomTheme = {
  [Key in keyof typeof themeColors]: (typeof themeColors)[Key];
};

declare module "@mui/material/styles/createTheme" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

// Create theme
export const theme = createTheme({ ...themeColors, ...themeOptions });
