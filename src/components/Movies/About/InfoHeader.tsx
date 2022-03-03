import { VFC } from "react";
import { Typography } from "@mui/material";

type InfoHeaderProps = {
  text: string;
};

export const InfoHeader: VFC<InfoHeaderProps> = (props) => {
  const { text } = props;
  return (
    <Typography color="white" variant="subtitle1" sx={{ fontWeight: "bold" }}>
      {text}
    </Typography>
  );
};
