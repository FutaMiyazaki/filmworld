import { VFC } from "react";
import { Typography } from "@mui/material";

type RunningTimeProps = {
  runtime?: number;
};

export const RunningTime: VFC<RunningTimeProps> = (props) => {
  const { runtime } = props;

  return (
    <>
      {runtime ? (
        <Typography color="white" variant="body1" sx={{ mb: 1 }}>
          {`上映時間： ${runtime}分`}
        </Typography>
      ) : null}
    </>
  );
};
