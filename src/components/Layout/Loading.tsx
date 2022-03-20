import { VFC } from "react";
import { Box, CircularProgress, Grid } from "@mui/material";

export const Loading: VFC = () => {
  return (
    <Box>
      <Grid container alignItems="center" justifyContent="center">
        <CircularProgress size={80} sx={{ mt: 10 }} />
      </Grid>
    </Box>
  );
};
