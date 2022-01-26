import NextLink from "next/link";
import { useMediaQuery } from "react-responsive";
import { Grid, Link as MuiLink } from "@mui/material";
import { useRevenueMovies } from "src/hooks/topMovies/useRevenueMovies";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";

export function RevenueMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { revenueMovies, error, isLoading } = useRevenueMovies();

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
      {revenueMovies.results.map((movie, i) => {
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
        <NextLink href="/movies/revenue?page=1" passHref>
          <MuiLink underline="hover" sx={{ fontWeight: "bold" }}>
            もっと見る
          </MuiLink>
        </NextLink>
      </Grid>
    </Grid>
  );
}
