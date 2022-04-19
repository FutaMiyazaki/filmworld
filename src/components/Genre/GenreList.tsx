import { VFC } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { AppLink } from "src/components/Layout/Link/AppLink";
import { Loading } from "src/components/Layout/Loading";
import { useGenres } from "src/hooks/useGenres";

export const GenreList: VFC = () => {
  const { genres, genresError, isLoading } = useGenres();

  if (isLoading) {
    return <Loading />;
  }

  if (genresError) {
    return <div>{genresError.message}</div>;
  }

  return (
    <Grid container columns={{ sm: 3, md: 4, lg: 5 }} spacing={2}>
      {genres?.genres.map((genre: { id: number; name: string }) => {
        return (
          <Grid item key={genre.id} sm={1} md={1} lg={1}>
            <AppLink
              path={`/movies/genre?id=${genre.id}&sort=popularity.desc&page=1`}
              underline="none"
            >
              <Paper
                sx={{
                  textAlign: "center",
                  p: 1,
                  "&:hover": {
                    opacity: 0.5,
                  },
                }}
              >
                <Typography variant="body1">{genre.name}</Typography>
              </Paper>
            </AppLink>
          </Grid>
        );
      })}
    </Grid>
  );
};
