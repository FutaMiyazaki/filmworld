import NextLink from "next/link";
import { useGenres } from "src/hooks/useGenres";
import { Loading } from "src/components/Layout/Loading";
import { Chip, Grid, Link as MuiLink } from "@mui/material";

export function GenreList() {
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
      spacing={2}
      justifyContent="center"
      columns={{ xs: 4, sm: 6 }}
    >
      {genres?.genres.map((genre) => {
        return (
          <Grid item xs="auto" sm={2} key={genre.id}>
            <NextLink
              href={`/movies/genre?id=${genre.id}&sort=popularity.desc&page=1`}
              passHref
            >
              <MuiLink underline="none">
                <Chip
                  label={genre.name}
                  color="primary"
                  variant="outlined"
                  clickable
                />
              </MuiLink>
            </NextLink>
          </Grid>
        );
      })}
    </Grid>
  );
}
