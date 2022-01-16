import React from "react";
import { Header } from "src/components/Layout/Header";
import { Grid, Container, Box, CssBaseline } from "@mui/material";
import { BottomNavi } from "src/components/Layout/BottomNavi";

export function LayoutMain({ children }) {
  return (
    <div>
      <CssBaseline />
      <Box sx={{ bgcolor: "#0A192A" }}>
        <Grid container direction="column">
          <Header />
          <Container>
            {children}
            <BottomNavi />
          </Container>
        </Grid>
      </Box>
    </div>
  );
}
