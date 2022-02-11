import NextLink from "next/link";
import { Grid, Link as MuiLink, Typography } from "@mui/material";

export function PageHeadingLink({ path, text }) {
  return (
    <Grid container direction="row" alignItems="center" sx={{ mb: 2 }}>
      <Grid item>
        <NextLink href={path} passHref>
          <MuiLink underline="none" sx={{ color: "white" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {text}
            </Typography>
          </MuiLink>
        </NextLink>
      </Grid>
    </Grid>
  );
}
