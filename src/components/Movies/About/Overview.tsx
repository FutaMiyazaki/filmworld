import { Box, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type OverviewProps = {
  overview: string;
};

export function Overview(props: OverviewProps) {
  const { overview } = props;
  return (
    <Box sx={{ mb: 2 }}>
      <InfoHeader text="あらすじ" />
      <Paper sx={{ p: 1 }}>
        <Typography variant="body2" color="white">
          {overview}
        </Typography>
      </Paper>
    </Box>
  );
}
