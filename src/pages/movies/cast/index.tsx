import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { PageHeading } from "src/components/Layout/PageHeading";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { Movies } from "src/components/Movies/index";
import { useCast } from "src/hooks/useCast";
import { useCastMovies } from "src/hooks/useCastMovies";

const MoviesCast: NextPage = () => {
  const router = useRouter();
  const { cast } = useCast();
  const { movies, error, isLoading } = useCastMovies();

  return (
    <div>
      <Head>
        <title>{cast?.name}が出演している映画 - FilmWorld</title>
      </Head>
      <PageHeading text={`${cast?.name}が出演している映画`} />
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        columns={{ xs: 4, sm: 8 }}
        sx={{ mb: 4 }}
      >
        <Grid item xs={4} sm={2}>
          <FilterByYear
            path={`/movies/cast?id=${router.query.id}&sort=${router.query.sort}&`}
          />
        </Grid>
        <Grid item xs={4} sm={3}>
          <SortMenu path={`/movies/cast?id=${router.query.id}`} />
        </Grid>
      </Grid>
      <Movies
        movies={movies?.results}
        error={error}
        isLoading={isLoading}
        maxDisplay={20}
        path={`/movies/cast?id=${router.query.id}&sort=${router.query.sort}&`}
        totalPages={movies?.total_pages}
      />
    </div>
  );
};

export default MoviesCast;
