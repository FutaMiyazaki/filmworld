import { Typography } from "@mui/material";

export const Revenue = ({ revenue = 0 }: { revenue: number }) => {
  const fmtRevenue = new Intl.NumberFormat("ja-JP", {
    notation: "compact",
  }).format(BigInt(revenue));

  return (
    <>
      {revenue ? (
        <Typography color="white" variant="body1" sx={{ mb: 1 }}>
          興行収入： {fmtRevenue}ドル
        </Typography>
      ) : null}
    </>
  );
};
