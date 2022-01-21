import { Grid } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useSimilarMovies } from "src/hooks/useSimilarMovies";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";

export function SimilarMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { similarMovies, similarMoviesError, isLoading } = useSimilarMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (similarMoviesError) {
    return <div>{similarMoviesError.message}</div>;
  }

  console.log(similarMovies);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      columns={{ xs: 4, sm: 8 }}
    >
      {similarMovies.results?.map((movie, i) => {
        return i < 10 ? (
          <Grid key={movie.id} item xs={4} sm={4}>
            {isMobileScreen ? (
              <MobileCard movie={movie} />
            ) : (
              <PcCard movie={movie} />
            )}
          </Grid>
        ) : null;
      })}
    </Grid>
  );
}
