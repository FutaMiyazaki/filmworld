import { Grid, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export function PageHeading(props) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Grid container direction="row" alignItems="center" sx={{ mb: 2 }}>
      <Grid item>
        <Typography
          variant={isMobileScreen ? "subtitle1" : "h5"}
          color="white"
          sx={{ fontWeight: "bold" }}
        >
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
}
