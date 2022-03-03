import NextLink from "next/link";
import { VFC } from "react";
import { Box, Link as MuiLink, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/About/InfoHeader";

type CastData = {
  id: number;
  name: string;
}[];

type CastProps = {
  cast: CastData;
};

export const CastInfo: VFC<CastProps> = (props) => {
  const { cast } = props;

  return (
    <>
      {cast?.length ? (
        <Box>
          <InfoHeader text="出演者" />
          {cast?.map(({ id, name }, i: number) => {
            return i < 10 ? (
              <NextLink
                key={id}
                href={`/movies/cast?id=${id}&sort=popularity.desc&page=1`}
                passHref
              >
                <MuiLink underline="none">
                  <Paper
                    sx={{
                      display: "inline-block",
                      textAlign: "center",
                      px: 1,
                      mr: 1,
                      mb: 1,
                      "&:hover": {
                        opacity: 0.6,
                      },
                    }}
                  >
                    <Typography variant="body2">{name}</Typography>
                  </Paper>
                </MuiLink>
              </NextLink>
            ) : null;
          })}
        </Box>
      ) : null}
    </>
  );
};
