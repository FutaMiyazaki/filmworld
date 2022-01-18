import { Grid, Typography } from "@mui/material";
import { useMediaQuery } from "react-responsive";

export function TitleHeader(props) {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Grid
      item
      xs={5}
      sx={{ display: { xs: props.xsDisplay, sm: props.smDisplay } }}
    >
      <Typography
        variant={isMobileScreen ? "h5" : "h4"}
        color="white"
        sx={{ fontWeight: "bold" }}
      >
        {props.title}
      </Typography>
      <Typography
        variant={isMobileScreen ? "subtitle2" : "subtitle1"}
        color="gray"
        sx={{ mb: 2 }}
      >
        {props.originalTitle}
      </Typography>
    </Grid>
  );
}
