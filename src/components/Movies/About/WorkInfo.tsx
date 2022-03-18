import { VFC } from "react";
import { Box, Typography } from "@mui/material";

type WorkInfoProps = {
  data?: string;
  text: string;
};

export const WorkInfo: VFC<WorkInfoProps> = (props) => {
  const { data, text } = props;

  return (
    <>
      {data ? (
        <Box sx={{ mb: 1 }}>
          <Typography
            color="white"
            variant="subtitle1"
            sx={{ display: "inline", fontWeight: "bold", mr: 2 }}
          >
            {text}
          </Typography>
          <Typography color="white" variant="body2" sx={{ display: "inline" }}>
            {data}
          </Typography>
        </Box>
      ) : null}
    </>
  );
};
