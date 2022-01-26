import NextLink from "next/link";
import { useMediaQuery } from "react-responsive";
import { Grid, Link as MuiLink } from "@mui/material";
import { usePopularMovies } from "src/hooks/topMovies/usePopularMovies";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";

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
      sx={{ mb: 4 }}
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
      <Grid item sx={{ mt: 1 }}>
        <NextLink href="/movies/popular?page=1" passHref>
          <MuiLink underline="hover" sx={{ fontWeight: "bold" }}>
            もっと見る
          </MuiLink>
        </NextLink>
      </Grid>
    </Grid>
  );
}
