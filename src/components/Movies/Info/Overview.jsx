import { Box, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/Info/InfoHeader";

export function Overview(props) {
  return (
    <Box>
      <InfoHeader text="あらすじ" />
      <Typography variant="body2" color="white">
        {props.overview}
      </Typography>
    </Box>
  );
}
