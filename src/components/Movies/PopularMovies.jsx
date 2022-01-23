import { usePopularMovies } from "src/hooks/usePopularMoviesTop";
import { useMediaQuery } from "react-responsive";
import { Loading } from "src/components/Layout/Loading";
import { Grid } from "@mui/material";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";

export function PopularMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { data, error, isLoading, isEmpty } = usePopularMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>データは空です</div>;
  }

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      columns={{ xs: 4, sm: 8 }}
    >
      {data.results.map((movie) => {
        return (
          <Grid key={movie.id} item xs={4} sm={4}>
            {isMobileScreen ? (
              <MobileCard movie={movie} />
            ) : (
              <PcCard movie={movie} />
            )}
          </Grid>
        );
      })}
    </Grid>
  );
}
