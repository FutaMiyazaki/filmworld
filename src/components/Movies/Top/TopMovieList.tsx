import { VFC } from "react";
import { useMediaQuery } from "react-responsive";
import { Grid, Skeleton, Stack } from "@mui/material";
import { AppPagination } from "src/components/Layout/AppPagination";
import { MoviesCard } from "src/components/Movies/Card/index";

type movieType = {
  id: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  vote_average: 0;
  vote_count: 0;
};

type movieListData = {
  id: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  vote_average: 0;
  vote_count: 0;
}[];

type errorData = {
  message?: string;
};

type TopMovieListProps = {
  movies: movieListData;
  error: errorData;
  gridLg: number;
  gridMd: number;
  gridSm: number;
  gridXs: number;
  isLoading: boolean;
  maxDisplay: number;
  path: string;
  totalPages: number;
};

export const TopMovieList: VFC<TopMovieListProps> = (props) => {
  const {
    movies,
    error,
    gridLg,
    gridMd,
    gridSm,
    gridXs,
    isLoading,
    maxDisplay,
    path,
    totalPages,
  } = props;
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return (
      <Grid
        container
        columns={{ xs: gridXs, sm: gridSm, md: gridMd, lg: gridLg }}
        spacing={2}
      >
        {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((n: number, i: number) => {
          return i < maxDisplay ? (
            <Grid key={i} item xs={1} sm={1} md={1} lg={1}>
              {isMobileScreen ? (
                <Grid container columns={{ xs: 5 }} spacing={2}>
                  <Grid item xs={2}>
                    <Skeleton variant="rectangular" height="20vh" />
                  </Grid>
                  <Grid item xs={3}>
                    <Skeleton variant="text" />
                    <Skeleton variant="text" />
                  </Grid>
                </Grid>
              ) : (
                <Stack spacing={1}>
                  <Skeleton variant="rectangular" height="20vh" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="80%" />
                </Stack>
              )}
            </Grid>
          ) : null;
        })}
      </Grid>
    );
  }

  return (
    <>
      <Grid
        container
        columns={{ xs: gridXs, sm: gridSm, md: gridMd, lg: gridLg }}
        spacing={2}
      >
        {movies.map((movie: movieType, i: number) => {
          return i < maxDisplay && movie?.poster_path ? (
            <Grid key={movie.id} item xs={1} sm={1} md={1} lg={1}>
              <MoviesCard
                movie={{
                  id: movie.id,
                  title: movie.title,
                  posterPath: movie.poster_path,
                  releaseDate: movie.release_date,
                  voteAverage: movie.vote_average,
                  voteCount: movie.vote_count,
                }}
              />
            </Grid>
          ) : null;
        })}
      </Grid>
      <AppPagination path={path} totalPages={totalPages} />
    </>
  );
};
