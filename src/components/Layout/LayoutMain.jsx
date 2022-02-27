import React from "react";
import { useMediaQuery } from "react-responsive";
import { Container, Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from "src/styles/theme";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { BottomNavi } from "src/components/Layout/BottomNavi";
import { Header } from "src/components/Layout/Header";

export const LayoutMain = ({ children }) => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box>
          <Header />
          <Container sx={{ mt: isMobileScreen ? 3 : 10, mb: 10 }}>
            {children}
          </Container>
          <BottomNavi />
        </Box>
      </ThemeProvider>
    </div>
  );
};
