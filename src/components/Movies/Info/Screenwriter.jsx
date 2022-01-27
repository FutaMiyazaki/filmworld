import { Box, Paper, Typography } from "@mui/material";
import { useCallback } from "react";
import { InfoHeader } from "src/components/Movies/Info/InfoHeader";

export function Screenwriter(props) {
  const unique = useCallback((values, f = (v) => v) => {
    return Array.from(
      new Map(values?.map((value) => [f(value), value])).values()
    );
  }, []);

  const uniqueCrew = unique(props?.crew, (crew) => crew.id);

  return (
    <Box sx={{ mb: 1 }}>
      <InfoHeader text="脚本" />
      {uniqueCrew?.map((crew) => {
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
