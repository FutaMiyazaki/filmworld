import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { Movies } from "src/components/Movies/index";
import { PageHeading } from "src/components/Layout/PageHeading";
import { FilterByYear } from "src/components/Layout/Form/FilterByYear";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { useCompany } from "src/hooks/useCompany";
import { useCompanyMovies } from "src/hooks/useCompanyMovies";

const MoviesCompany: NextPage = () => {
  const router = useRouter();
  const { company } = useCompany();
  const { movies, error, isLoading } = useCompanyMovies();

  return (
    <div>
      <Head>
        <title>{company?.name}の映画 - FilmWorld</title>
      </Head>
      <PageHeading text={`${company?.name}の映画`} />
      <Grid
        container
        spacing={2}
        justifyContent="flex-start"
        columns={{ xs: 4, sm: 8 }}
        sx={{ mb: 4 }}
      >
        <Grid item xs={4} sm={2}>
          <FilterByYear
            path={`/movies/company?id=${router.query.id}&sort=${router.query.sort}&`}
          />
        </Grid>
        <Grid item xs={4} sm={3}>
          <SortMenu path={`/movies/company?id=${router.query.id}`} />
        </Grid>
      </Grid>
      <Movies
        movies={movies?.results}
        error={error}
        isLoading={isLoading}
        path={`/movies/company?id=${router.query.id}&sort=${router.query.sort}&`}
        totalPages={movies?.total_pages}
      />
    </div>
  );
};

export default MoviesCompany;
