import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid } from "@mui/material";
import { AppPagination } from "src/components/Layout/AppPagination";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";

export function GenreMovies({ movies }) {
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <div>
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        columns={{ xs: 4, sm: 8 }}
      >
        {movies?.results.map((movie) => {
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
      <AppPagination
        movies={movies}
        path={`/movies/genre?id=${router.query.id}&sort=${router.query.sort}&`}
      />
    </div>
  );
}
