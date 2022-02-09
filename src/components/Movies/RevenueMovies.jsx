import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination } from "@mui/material";
import { useRevenueMovies } from "src/hooks/useRevenueMovies";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";

export function RevenueMovies() {
  const [page, setPage] = useState(1);
  const router = useRouter();
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { revenueMovies, error, isLoading } = useRevenueMovies();

  const handlePage = (e, clickPage) => {
    setPage((page) => clickPage);
    router.push(`/movies/revenue?page=${clickPage}`);
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
        justifyContent="center"
        columns={{ xs: 4, sm: 8 }}
      >
        {revenueMovies.results.map((movie) => {
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
      <Grid container justifyContent="center" spacing={1} sx={{ mt: 4 }}>
        <Pagination
          page={page}
          count={revenueMovies.total_pages}
          variant="outlined"
          shape="rounded"
          color="primary"
          size="medium"
          onChange={handlePage}
        />
      </Grid>
    </div>
  );
}
