import { useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination } from "@mui/material";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";
import { PageHeading } from "src/components/Layout/PageHeading";
import { useSearchMovies } from "src/hooks/useSearchMovie";

export function SearchResultsMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const router = useRouter();
  const [page, setPage] = useState(router.query.page);
  const { movies, error, isLoading, isEmpty } = useSearchMovies();

  const handlePage = (e, clickPage) => {
    setPage((page) => clickPage);
    if (router.query.keyword) {
      router.push(
        `/search/movies?keyword=${router.query.keyword}&page=${clickPage}`
      );
    } else {
      router.push(
        `/search/movies?genre=${router.query.genre}&year_start=${router.query.year_start}&year_end=${router.query.year_end}&page=${clickPage}`
      );
    }
  };

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
    <div>
      {router.query.keyword ? (
        <PageHeading
          primaryText={router.query.keyword}
          text={`の検索結果: ${movies?.total_results}件`}
        />
      ) : (
        <PageHeading text={`検索結果: ${movies?.total_results}件`} />
      )}
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
      {movies?.total_pages <= 1 ? null : (
        <Grid container justifyContent="center" spacing={1} sx={{ mt: 4 }}>
          <Pagination
            page={page}
            count={movies?.total_pages}
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
