import { Box, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/Info/InfoHeader";

export function Overview(props) {
  return (
    <Box>
      <InfoHeader text="あらすじ" />
      <Paper sx={{ p: 1 }}>
        <Typography variant="body2" color="white">
          {props?.overview}
        </Typography>
      </Paper>
    </Box>
  );
}
