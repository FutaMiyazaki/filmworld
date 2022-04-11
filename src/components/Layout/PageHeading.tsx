import NextLink from "next/link";
import { VFC } from "react";
import { Grid, Link as MuiLink, Typography } from "@mui/material";

type PageHeadingProps = {
  path?: string;
  text: string;
};

export const PageHeading: VFC<PageHeadingProps> = (props) => {
  const { path, text } = props;

  return (
    <Grid container direction="row" alignItems="center" sx={{ mb: 2 }}>
      <Grid item>
        {path ? (
          <NextLink href={path} passHref>
            <MuiLink color="white" underline="none">
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {text}
              </Typography>
            </MuiLink>
          </NextLink>
        ) : (
          <Typography
            variant="h6"
            sx={{ display: "inline", fontWeight: "bold" }}
          >
            {text}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};
