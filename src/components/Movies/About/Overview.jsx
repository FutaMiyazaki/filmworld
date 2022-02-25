import { Box, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

export function Overview(props) {
  return (
    <Box sx={{ mb: 1 }}>
      <InfoHeader text="あらすじ" />
      <Paper sx={{ p: 1 }}>
        <Typography variant="body2" color="white">
          {props?.overview}
        </Typography>
      </Paper>
    </Box>
  );
}
