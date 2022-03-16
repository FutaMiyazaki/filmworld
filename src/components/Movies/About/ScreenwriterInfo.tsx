import { useCallback, VFC } from "react";
import { Box, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type CrewData = {
  id: number;
  job: string;
  name: string;
}[];

type ScreenwriterProps = {
  crew: CrewData;
};

export const ScreenwriterInfo: VFC<ScreenwriterProps> = (props) => {
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
    <Box sx={{ mb: 2 }}>
      <InfoHeader text="脚本" />
      {uniqueCrew?.map(({ id, job, name }) => {
        return job === "Story" ||
          job === "Writer" ||
          job === "Screenplay" ||
          job === "Screenstory" ||
          job === "Original Film Writer" ? (
          <Typography
            key={id}
            variant="body2"
            sx={{
              display: "inline-block",
              mr: 2,
            }}
          >
            {name}
          </Typography>
        ) : null;
      })}
    </Box>
  );
};
