import { Box, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/Info/InfoHeader";

export function Cast(props) {
  return (
    <Box>
      <InfoHeader text="出演者" />
      {props?.cast.map((cast, i) => {
        return i < 10 ? (
          <Paper
            key={cast.id}
            sx={{
              display: "inline-block",
              textAlign: "center",
              px: 1,
              mr: 1,
              mb: 1,
            }}
          >
            <Typography variant="body2">{cast.name}</Typography>
          </Paper>
        ) : null;
      })}
    </Box>
  );
}
