import { Grid, Typography } from "@mui/material";

export function PageHeading(props) {
  return (
    <Grid container direction="row" alignItems="center" sx={{ mb: 2 }}>
      <Grid item>
        <Typography
          variant="h5"
          color="primary"
          sx={{ display: "inline", fontWeight: "bold" }}
        >
          {props.primaryText}
        </Typography>
        <Typography variant="h6" sx={{ display: "inline", fontWeight: "bold" }}>
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
}
