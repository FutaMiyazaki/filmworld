import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#69D2E7",
      light: "#B1E2EC",
      dark: "#001E3D",
    },
    secondary: {
      main: "#FA6900",
      light: "#FDAD0D",
      dark: "#E3460B",
    },
    common: {
      black: "#343a40",
      white: "#F4F4F4",
    },
    info: {
      main: "#005CAF",
      light: "#0087FC",
      dark: "#00437D",
    },
    success: {
      main: "#00AA90",
      light: "#00F7D2",
      dark: "#007866",
    },
    warning: {
      main: "#FFB11B",
      light: "#FFDB0F",
      dark: "#E8820E",
    },
    error: {
      main: "#CB1B45",
      light: "#D55B78",
      dark: "#991433",
    },
    tonalOffset: 0.2,
    background: {
      default: "#0A192A",
    },
    type: "dark",
  },
});

export default responsiveFontSizes(theme);
