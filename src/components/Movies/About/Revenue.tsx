import { Box, Typography } from "@mui/material";

export const Revenue = ({ revenue = 0 }: { revenue: number }) => {
  const fmtRevenue = new Intl.NumberFormat("ja-JP", {
    notation: "compact",
  }).format(BigInt(revenue));

  return (
    <>
      {revenue ? (
        <Box sx={{ mb: 1 }}>
          <Typography
            color="white"
            variant="subtitle1"
            sx={{ display: "inline", fontWeight: "bold", mr: 2 }}
          >
            興行収入
          </Typography>
          <Typography color="white" variant="body2" sx={{ display: "inline" }}>
            {fmtRevenue}ドル
          </Typography>
        </Box>
      ) : null}
    </>
  );
};
