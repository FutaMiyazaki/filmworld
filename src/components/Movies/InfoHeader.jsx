import { Typography } from "@mui/material";

export function InfoHeader(props) {
  return (
    <Typography variant="subtitle1" color="white" sx={{ fontWeight: "bold" }}>
      {props.text}
    </Typography>
  );
}
