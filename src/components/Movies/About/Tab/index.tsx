import { Box } from "@mui/material";
import { ReactNode, VFC } from "react";

type MoviesAboutTabProps = {
  children: ReactNode;
  index: number;
  value: number;
};

export const MoviesAboutTab: VFC<MoviesAboutTabProps> = (props) => {
  const { children, index, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`movie-about-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
};
