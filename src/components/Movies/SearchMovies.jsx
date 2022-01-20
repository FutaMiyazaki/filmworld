import { useSearchMovies } from "src/hooks/useSearchMovie";
import { useMediaQuery } from "react-responsive";
import { Loading } from "src/components/Layout/Loading";
import { Grid } from "@mui/material";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";

export function SearchMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { data, error, isLoading, isEmpty } = useSearchMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isEmpty) {
    return <div>見つかりませんでした</div>;
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
