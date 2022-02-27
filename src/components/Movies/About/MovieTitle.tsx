import { Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

type MovieTitleProps = {
  title: string;
  originalTitle: string;
};

export const MovieTitle = (props: MovieTitleProps) => {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <>
      <Typography
        variant={isMobileScreen ? "h5" : "h4"}
        color="white"
        sx={{ fontWeight: "bold" }}
      >
        {props?.title}
      </Typography>
      <Typography
        variant={isMobileScreen ? "subtitle2" : "subtitle1"}
        color="gray"
        sx={{ mb: 1 }}
      >
        {props?.originalTitle}
      </Typography>
    </>
  );
};
