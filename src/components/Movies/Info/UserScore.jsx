import { Box, Rating, Typography } from "@mui/material";

export function UserScore(props) {
  const shapingScore = (score) => {
    return Math.floor((score / 2) * Math.pow(10, 1)) / Math.pow(10, 1);
  };

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
        value={shapingScore(props?.voteAverage)}
        precision={0.1}
        size={props?.size}
      />
      <Box sx={{ ml: 1 }}>
        <Typography
          variant="subtitle1"
          color="#FBBD30"
          sx={{ mr: 1, display: "inline" }}
        >
          {shapingScore(props?.voteAverage)}
        </Typography>
        <Typography variant="caption" color="white">
          ({props?.voteCount})
        </Typography>
      </Box>
    </Box>
  );
}
