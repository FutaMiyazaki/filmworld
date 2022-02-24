import { Grid } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { SideMenu } from "src/components/Layout/SideMenu";
import { PopularMovies } from "src/components/Movies/Top/PopularMovies";
import { RevenueMovies } from "src/components/Movies/Top/RevenueMovies";

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>FilmWorld</title>
      </Head>
      <Grid container spacing={1} columns={{ xs: 4, sm: 8 }}>
        <Grid item xs={0} sm={2} sx={{ display: { xs: "none", sm: "flex" } }}>
          <SideMenu />
        </Grid>
        <Grid item xs={4} sm={6}>
          <PageHeading path="/movies/popular?page=1" text="人気ランキング" />
          <PopularMovies />
          <PageHeading
            path="/movies/popular?page=1"
            text="興行収入ランキング"
          />
          <RevenueMovies />
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
