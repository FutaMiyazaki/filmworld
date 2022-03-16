import { VFC } from "react";
import { Box, Typography } from "@mui/material";

type RunningTimeProps = {
  runtime?: number;
};

export const RunningTime: VFC<RunningTimeProps> = (props) => {
  const { runtime } = props;

  return (
    <>
      {runtime ? (
        <Box sx={{ mb: 1 }}>
          <Typography
            color="white"
            variant="subtitle1"
            sx={{ display: "inline", fontWeight: "bold", mr: 2 }}
          >
            上映時間
          </Typography>
          <Typography color="white" variant="body2" sx={{ display: "inline" }}>
            {runtime}分
          </Typography>
        </Box>
      ) : null}
    </>
  );
};
