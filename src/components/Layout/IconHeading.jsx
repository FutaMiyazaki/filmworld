import { createElement } from "react";
import { Grid, Typography } from "@mui/material";
import * as Icons from "@mui/icons-material";

export function IconHeading(props) {
  return (
    <Grid container direction="row" alignItems="center" sx={{ mb: 2 }}>
      <Grid item sx={{ mr: 1 }}>
        {createElement(Icons[props.icon], {
          fontSize: "large",
          color: "primary",
        })}
      </Grid>
      <Grid item>
        <Typography component="div" variant="h5" sx={{ color: "white" }}>
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
}
