import { NextPage } from "next";
import Head from "next/head";
import { Grid } from "@mui/material";
import { GenreList } from "src/components/Genre/GenreList";
import { PageHeading } from "src/components/Layout/PageHeading";
import { SideMenu } from "src/components/Layout/SideMenu";

const Genres: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ジャンル一覧 - FilmWorld</title>
      </Head>
      <Grid container spacing={1} columns={{ xs: 4, sm: 8 }}>
        <Grid item xs={0} sm={2} sx={{ display: { xs: "none", sm: "flex" } }}>
          <SideMenu />
        </Grid>
        <Grid item xs={4} sm={6}>
          <PageHeading text="ジャンル一覧" />
          <GenreList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Genres;
