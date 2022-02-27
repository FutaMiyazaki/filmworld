import { Box, CircularProgress, Grid } from "@mui/material";

export const Loading = () => {
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        <CircularProgress size={80} sx={{ mt: 20 }} />
      </Grid>
    </Box>
  );
};
