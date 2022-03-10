import { VFC } from "react";
import { Grid } from "@mui/material";
import { AppPagination } from "src/components/Layout/AppPagination";
import { Loading } from "src/components/Layout/Loading";
import { MoviesCard } from "src/components/Movies/Card/index";

type movieType = {
  id: number;
  poster_path?: string;
  release_date?: string;
  title: string;
  vote_average: 0;
  vote_count: 0;
};

type moviesData = {
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

type MoviesProps = {
  movies: moviesData;
  error: errorData;
  gridSm: number;
  gridXs: number;
  isLoading: boolean;
  maxDisplay: number;
  path: string;
  totalPages: number;
};

export const Movies: VFC<MoviesProps> = (props) => {
  const {
    movies,
    error,
    gridSm,
    gridXs,
    isLoading,
    maxDisplay,
    path,
    totalPages,
  } = props;

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Grid container columns={{ xs: gridXs, sm: gridSm }} spacing={2}>
        {movies.map((movie: movieType, i: number) => {
          return i < maxDisplay && movie?.poster_path ? (
            <Grid key={movie.id} item xs={1} sm={1}>
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
