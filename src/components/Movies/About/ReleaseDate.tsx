import { VFC } from "react";
import { Box, Typography } from "@mui/material";

type ReleaseDateProps = {
  releaseDate?: string;
};

export const ReleaseDate: VFC<ReleaseDateProps> = (props) => {
  const releaseDate = props.releaseDate?.replace(/-/g, "/");

  return (
    <>
      {releaseDate ? (
        <Box sx={{ mb: 1 }}>
          <Typography
            color="white"
            variant="subtitle1"
            sx={{ display: "inline", fontWeight: "bold", mr: 2 }}
          >
            公開日
          </Typography>
          <Typography color="white" variant="body2" sx={{ display: "inline" }}>
            {releaseDate}
          </Typography>
        </Box>
      ) : null}
    </>
  );
};
