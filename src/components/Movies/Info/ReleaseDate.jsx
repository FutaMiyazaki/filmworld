import { Typography } from "@mui/material";

export function ReleaseDate(props) {
  const releaseDate = props.releaseDate?.replace(/-/g, "/");
  return (
    <Typography variant="body1" color="white" sx={{ mb: 1 }}>
      公開日: {releaseDate}
    </Typography>
  );
}
