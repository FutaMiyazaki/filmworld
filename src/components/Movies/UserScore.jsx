import { Box, Typography } from "@mui/material";

export function UserScore(props) {
  return (
    <Box sx={{ my: 1 }}>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{ mr: 1, fontWeight: "bold", display: "inline" }}
      >
        ユーザースコア:
      </Typography>
      <Typography variant="h3" color="primary" sx={{ display: "inline" }}>
        {props.score}
      </Typography>
      <Typography variant="h5" color="white" sx={{ display: "inline" }}>
        /10
      </Typography>
    </Box>
  );
}
