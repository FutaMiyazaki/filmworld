import { VFC } from "react";
import { Box, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type OverviewProps = {
  overview?: string;
};

export const Overview: VFC<OverviewProps> = (props) => {
  const { overview } = props;
  return (
    <>
      {overview ? (
        <Box>
          <InfoHeader text="あらすじ" />
          <Typography variant="body2">{overview}</Typography>
        </Box>
      ) : null}
    </>
  );
};
