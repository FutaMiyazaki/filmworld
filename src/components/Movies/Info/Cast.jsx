import NextLink from "next/link";
import { Box, Link as MuiLink, Paper, Typography } from "@mui/material";
import { InfoHeader } from "src/components/Movies/Info/InfoHeader";

export function Cast(props) {
  return (
    <Box>
      <InfoHeader text="出演者" />
      {props.cast?.map((cast, i) => {
        return i < 10 ? (
          <NextLink
            key={cast.name}
            href={`/movies/cast?id=${cast.id}&page=1&sort=popularity.desc`}
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
                }}
              >
                <Typography variant="body2">{cast.name}</Typography>
              </Paper>
            </MuiLink>
          </NextLink>
        ) : null;
      })}
    </Box>
  );
}
