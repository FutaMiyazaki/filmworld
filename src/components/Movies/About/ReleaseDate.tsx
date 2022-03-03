import { VFC } from "react";
import { Typography } from "@mui/material";

type ReleaseDateProps = {
  releaseDate?: string;
};

export const ReleaseDate: VFC<ReleaseDateProps> = (props) => {
  const releaseDate = props.releaseDate?.replace(/-/g, "/");

  return (
    <>
      {releaseDate ? (
        <Typography variant="body1" color="white" sx={{ mb: 1 }}>
          公開日: {releaseDate}
        </Typography>
      ) : null}
    </>
  );
};
