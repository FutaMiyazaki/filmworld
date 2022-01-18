import React from "react";
import { Header } from "src/components/Layout/Header";
import { Container, Box, CssBaseline } from "@mui/material";
import { BottomNavi } from "src/components/Layout/BottomNavi";
import { ThemeProvider } from "@mui/material/styles";
import theme from "src/styles/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export function LayoutMain({ children }) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Header />
          <Container sx={{ mt: 3, mb: 10 }}>{children}</Container>
          <BottomNavi />
        </Box>
      </ThemeProvider>
    </div>
  );
}
