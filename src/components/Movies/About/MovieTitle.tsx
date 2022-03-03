import { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { Typography } from "@mui/material";

type MovieTitleProps = {
  title: string;
  originalTitle: string;
};

export const MovieTitle: VFC<MovieTitleProps> = (props) => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      <Typography
        color="white"
        variant={isMobileScreen ? "h5" : "h4"}
        sx={{ fontWeight: "bold" }}
      >
        {props?.title}
      </Typography>
      <Typography
        color="gray"
        variant={isMobileScreen ? "subtitle2" : "subtitle1"}
        sx={{ mb: 1 }}
      >
        {props?.originalTitle}
      </Typography>
    </>
  );
};
