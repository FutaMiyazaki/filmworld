import { useMediaQuery } from "react-responsive";
import { Loading } from "src/components/Layout/Loading";
import { Grid, Pagination } from "@mui/material";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";
import { useGenreMovies } from "src/hooks/useGenreMovies";
import { useState } from "react";
import { useRouter } from "next/router";

export function GenreMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { data, error, isLoading } = useGenreMovies();
  const [page, setPage] = useState(1);

  const router = useRouter();

  const handlePage = (e, clickPage) => {
    setPage((page) => clickPage);
    router.push(
      `/genres/movies?genre_id=${router.query.genre_id}&page=${clickPage}`
    );
  };

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
      <Grid container justifyContent="center" spacing={1} sx={{ mt: 3 }}>
        <Pagination
          count={data.total_pages}
          variant="outlined"
          shape="rounded"
          color="primary"
          onChange={handlePage}
        />
      </Grid>
    </div>
  );
}
