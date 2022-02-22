import { useMediaQuery } from "react-responsive";
import { Grid } from "@mui/material";
import { LinkButton } from "src/components/Layout/Link/LinkButton";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";
import { usePopularMovies } from "src/hooks/topMovies/usePopularMovies";

export function PopularMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { popularMovies, error, isLoading } = usePopularMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      columns={{ xs: 4, sm: 8 }}
      sx={{ mb: 5 }}
    >
      {popularMovies.results.map((movie, i) => {
        return i < 8 ? (
          <Grid key={movie.id} item xs={4} sm={4}>
            {isMobileScreen ? (
              <MobileCard movie={movie} />
            ) : (
              <PcCard movie={movie} />
            )}
          </Grid>
        ) : null;
      })}
      <Grid item xs={4} sm={4} sx={{ mt: 1 }}>
        <LinkButton href="/movies/popular?page=1" text="もっと見る" />
      </Grid>
    </Grid>
  );
}
