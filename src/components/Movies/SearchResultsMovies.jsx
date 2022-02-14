import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import { Grid, Pagination, Typography } from "@mui/material";
import { Loading } from "src/components/Layout/Loading";
import { MobileCard } from "src/components/Movies/Card/MobileCard";
import { PcCard } from "src/components/Movies/Card/Pccard";
import { PageHeading } from "src/components/Layout/PageHeading";
import { useGenres } from "src/hooks/useGenres";
import { useSearchMovies } from "src/hooks/useSearchMovie";

export function SearchResultsMovies() {
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const router = useRouter();
  const [genre, setGenre] = useState("");
  const { genres } = useGenres();
  const [page, setPage] = useState(router.query.page);
  const { movies, error, isLoading, isEmpty } = useSearchMovies();

  const genreSet = useEffect(() => {
    for (let i = 0; i < genres?.genres.length; i++) {
      if (genres?.genres[i].id == router.query.genre) {
        setGenre(genres?.genres[i].name);
      }
    }
  });

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
          text={`の検索結果 ${movies?.total_results}件`}
        />
      ) : (
        <Grid container direction="row" alignItems="center" sx={{ mb: 2 }}>
          <Grid item>
            <Typography
              variant="h5"
              color="primary"
              sx={{ display: "inline", fontWeight: "bold" }}
            >
              {router.query.year_start}
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: "inline", fontWeight: "bold" }}
            >
              ~
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              sx={{ display: "inline", fontWeight: "bold" }}
            >
              {router.query.year_end}
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: "inline", fontWeight: "bold" }}
            >
              年に公開された
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              sx={{ display: "inline", fontWeight: "bold" }}
            >
              {genre}
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: "inline", fontWeight: "bold", mr: 2 }}
            >
              のおすすめ映画
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              sx={{ display: "inline", fontWeight: "bold" }}
            >
              {movies?.total_results}
            </Typography>
            <Typography
              variant="h6"
              sx={{ display: "inline", fontWeight: "bold" }}
            >
              件
            </Typography>
          </Grid>
        </Grid>
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
