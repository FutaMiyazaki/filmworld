import { Box, Rating, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";

export function UserScore(props) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        my: 1,
      }}
    >
      <Rating
        readOnly
        name="read-only"
        value={props.voteAverage / 2}
        precision={0.1}
      />
      <Box sx={{ ml: 2 }}>
        <Typography
          variant="h6"
          color="#FBBD30"
          sx={{ mr: 1, display: "inline" }}
        >
          {props.voteAverage / 2}
        </Typography>
        <Typography variant="caption" color="white">
          ({props.voteCount})
        </Typography>
      </Box>
    </Box>
  );
}
