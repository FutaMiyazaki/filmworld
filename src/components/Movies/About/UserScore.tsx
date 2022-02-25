import { Box, Rating, Typography } from "@mui/material";

type UserScoreProps = {
  size: "small" | "medium" | "large";
  voteAverage: number;
  voteCount: number;
};

export const UserScore = (props: UserScoreProps) => {
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
        value={shapingScore(voteAverage)}
        precision={0.1}
        size={size}
      />
      <Box sx={{ ml: 1 }}>
        <Typography
          variant="subtitle1"
          color="#FBBD30"
          sx={{ mr: 1, display: "inline", fontWeight: "bold" }}
        >
          {shapingScore(voteAverage)}
        </Typography>
        <Typography variant="caption" color="white" sx={{ fontWeight: "bold" }}>
          ({voteCount})
        </Typography>
      </Box>
    </Box>
  );
};
