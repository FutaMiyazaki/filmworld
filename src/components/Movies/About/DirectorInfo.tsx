import { VFC } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type CrewData = {
  id: number;
  job: string;
  name: string;
}[];

type DirectorProps = {
  crew: CrewData;
};

export const DirectorInfo: VFC<DirectorProps> = (props) => {
  const { crew } = props;

  return (
    <Box sx={{ mb: 1 }}>
      <InfoHeader text="監督" />
      {crew?.map(({ id, job, name }) => {
        return job === "Director" ? (
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
