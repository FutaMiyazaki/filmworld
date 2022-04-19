import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { Loading } from "src/components/Layout/Loading";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MovieList } from "src/components/Movies/MovieList";
import { useCast } from "src/hooks/useCast";
import { useCastMovies } from "src/hooks/useCastMovies";

const MoviesCast: NextPage = () => {
  const router = useRouter();
  const { cast } = useCast();
  const { movies, error, isLoading } = useCastMovies();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{cast?.name}が出演している映画 - FilmWorld</title>
      </Head>
      <PageHeading text={`${cast?.name}が出演している映画`} />
      <Grid container justifyContent="flex-start" sx={{ mb: 4 }}>
        <Grid item xs={5} sm={4} md={3} lg={3}>
          <FilterByYear
            path={`/movies/cast?id=${router.query.id}&sort=${router.query.sort}&`}
          />
        </Grid>
        <Grid item xs={2} sm={4} md={6} lg={6} />
        <Grid item xs={5} sm={4} md={3} lg={3}>
          <SortMenu path={`/movies/cast?id=${router.query.id}`} />
        </Grid>
      </Grid>
      <MovieList
        movies={movies?.results}
        error={error}
        gridLg={5}
        gridMd={4}
        gridSm={3}
        gridXs={2}
        isLoading={isLoading}
        maxDisplay={20}
        path={`/movies/cast?id=${router.query.id}&sort=${router.query.sort}&`}
        totalPages={movies?.total_pages}
      />
    </div>
  );
};

export default MoviesCast;
