import NextLink from "next/link";
import { VFC } from "react";
import { useGenres } from "src/hooks/useGenres";
import { Loading } from "src/components/Layout/Loading";
import { Chip, Grid, Link as MuiLink } from "@mui/material";

export const GenreList: VFC = () => {
  const { genres, genresError, isLoading } = useGenres();

  if (isLoading) {
    return <Loading />;
  }

  if (genresError) {
    return <div>{genresError.message}</div>;
  }

  return (
    <Grid
      container
      columns={{ xs: 4, sm: 6 }}
      justifyContent="center"
      spacing={2}
    >
      {genres?.genres.map((genre: { id: number; name: string }) => {
        return (
          <Grid item key={genre.id} xs="auto" sm={2}>
            <NextLink
              href={`/movies/genre?id=${genre.id}&sort=popularity.desc&page=1`}
              passHref
            >
              <MuiLink underline="none">
                <Chip
                  clickable
                  color="primary"
                  label={genre.name}
                  variant="outlined"
                />
              </MuiLink>
            </NextLink>
          </Grid>
        );
      })}
    </Grid>
  );
};
