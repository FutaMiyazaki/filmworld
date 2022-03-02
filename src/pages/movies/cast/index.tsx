import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { CastMovies } from "src/components/Movies/CastMovies";
import { PageHeading } from "src/components/Layout/PageHeading";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { useCast } from "src/hooks/useCast";

const MoviesCast: NextPage = () => {
  const router = useRouter();
  const { cast } = useCast();

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
      <CastMovies />
    </div>
  );
};

export default MoviesCast;
