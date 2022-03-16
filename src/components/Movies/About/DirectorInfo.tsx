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
    <Box sx={{ mb: 2 }}>
      <InfoHeader text="監督" />
      {crew?.map(({ id, job, name }) => {
        return job === "Director" ? (
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
