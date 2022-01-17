import { Grid, Link as MuiLink, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";

export function ExternalLink(props) {
  return (
    <Grid sx={{ m: 1 }}>
      <MuiLink
        href={props.url}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
      >
        <Grid container direction="row" alignItems="center">
          <Grid item sx={{ mr: 1 }}>
            <LinkIcon color="primary" />
          </Grid>
          <Grid item>
            <Typography
              component="div"
              variant="subtitle1"
              sx={{ color: "primary" }}
            >
              {props.text}
            </Typography>
          </Grid>
        </Grid>
      </MuiLink>
    </Grid>
  );
}
