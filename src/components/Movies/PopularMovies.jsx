import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination } from "@mui/material";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";
import { usePopularMovies } from "src/hooks/usePopularMovies";

export function PopularMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const router = useRouter();
  const [page, setPage] = useState(1);
  const { movies, error, isLoading } = usePopularMovies();

  const handlePage = (e, clickPage) => {
    setPage((page) => clickPage);
    router.push(
      router.query.year
        ? `/movies/popular?page=${clickPage}&year=${router.query.year}`
        : `/movies/popular?page=${clickPage}`
    );
  };

  useEffect(() => {
    setPage(1);
  }, [router.query.year]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

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
      {movies?.total_pages === 1 ? null : (
        <Grid container justifyContent="center" spacing={1} sx={{ mt: 4 }}>
          <Pagination
            page={page}
            count={movies.total_pages}
            variant="outlined"
            shape="rounded"
            color="primary"
            size={isMobileScreen ? "small" : "medium"}
            onChange={handlePage}
          />
        </Grid>
      )}
    </div>
  );
}
