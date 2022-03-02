import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { Grid } from "@mui/material";
import { CompanyMovies } from "src/components/Movies/CompanyMovies";
import { PageHeading } from "src/components/Layout/PageHeading";
import { SortMenu } from "src/components/Layout/Form/SortMenu";
import { useCompany } from "src/hooks/useCompany";

const MoviesCompany: NextPage = () => {
  const router = useRouter();
  const { company } = useCompany();

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
          <SortMenu path={`/movies/company?id=${router.query.id}`} />
        </Grid>
      </Grid>
      <CompanyMovies />
    </div>
  );
};

export default MoviesCompany;
