import { Box, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/Info/InfoHeader";

export function Screenwriter(props) {
  return (
    <Box>
      <InfoHeader text="脚本" />
      {props.crew?.map((crew) => {
        return crew.job === "Story" ||
          crew.job === "Writer" ||
          crew.job === "Screenplay" ||
          crew.job === "Screenstory" ||
          crew.job === "Original Film Writer" ? (
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
