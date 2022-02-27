import { Typography } from "@mui/material";

type InfoHeaderProps = {
  text: string;
};

export const InfoHeader = (props: InfoHeaderProps) => {
  const { text } = props;
  return (
    <Typography variant="subtitle1" color="white" sx={{ fontWeight: "bold" }}>
      {text}
    </Typography>
  );
};
