import { useCallback } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type CrewData = {
  id: number;
  job: string;
  name: string;
}[];

type ScreenwriterProps = {
  crew: CrewData;
};

export const ScreenwriterInfo = (props: ScreenwriterProps) => {
  const { crew } = props;
  const unique = useCallback(
    (
      values: CrewData,
      f = (v: { id: number; job: string; name: string }) => v
    ) => {
      return Array.from(
        new Map(values?.map((value) => [f(value), value])).values()
      );
    },
    []
  );

  const uniqueCrew = unique(
    crew,
    (crew: { id: number; job: string; name: string }) => crew.id
  );

  return (
    <Box sx={{ mb: 1 }}>
      <InfoHeader text="脚本" />
      {uniqueCrew?.map(({ id, job, name }) => {
        return job === "Story" ||
          job === "Writer" ||
          job === "Screenplay" ||
          job === "Screenstory" ||
          job === "Original Film Writer" ? (
          <Paper
            key={id}
            sx={{
              display: "inline-block",
              textAlign: "center",
              px: 1,
              mr: 1,
              mb: 1,
            }}
          >
            <Typography variant="body2">{name}</Typography>
          </Paper>
        ) : null;
      })}
    </Box>
  );
};
