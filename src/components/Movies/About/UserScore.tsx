import { VFC } from "react";
import { Box, Rating, Typography } from "@mui/material";

type UserScoreProps = {
  size: "small" | "medium" | "large";
  voteAverage: 0;
  voteCount: 0;
};

export const UserScore: VFC<UserScoreProps> = (props) => {
  const { size, voteAverage, voteCount } = props;
  const shapingScore = (score: number) => {
    return Math.floor((score / 2) * Math.pow(10, 1)) / Math.pow(10, 1);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 1,
      }}
    >
      <Rating
        readOnly
        name="read-only"
        precision={0.1}
        size={size}
        value={shapingScore(voteAverage)}
      />
      <Box sx={{ ml: 1 }}>
        <Typography
          color="#FBBD30"
          variant="subtitle1"
          sx={{ mr: 1, display: "inline", fontWeight: "bold" }}
        >
          {shapingScore(voteAverage)}
        </Typography>
        <Typography color="white" variant="caption" sx={{ fontWeight: "bold" }}>
          ({voteCount})
        </Typography>
      </Box>
    </Box>
  );
};
