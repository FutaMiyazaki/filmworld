import { Box, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

export function Director(props) {
  return (
    <Box sx={{ mb: 1 }}>
      <InfoHeader text="監督" />
      {props.crew?.map((crew) => {
        return crew.job === "Director" ? (
          <Paper
            key={crew.id}
            sx={{
              display: "inline-block",
              textAlign: "center",
              px: 1,
              mr: 1,
              mb: 1,
            }}
          >
            <Typography variant="body2">{crew.name}</Typography>
          </Paper>
        ) : null;
      })}
    </Box>
  );
}
