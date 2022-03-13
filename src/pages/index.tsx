import { NextPage } from "next";
import { Grid } from "@mui/material";
import { PageHeading } from "src/components/Layout/PageHeading";
import { SideMenu } from "src/components/Layout/SideMenu";
import { MoviesTopPopular } from "src/components/Movies/Top/Popular";
import { MoviesTopRevenue } from "src/components/Movies/Top/Revenue";

const Index: NextPage = () => {
  return (
    <div>
      <Grid container spacing={1} columns={{ xs: 4, sm: 8 }}>
        <Grid item xs={0} sm={2} sx={{ display: { xs: "none", sm: "flex" } }}>
          <SideMenu />
        </Grid>
        <Grid item xs={4} sm={6}>
          <PageHeading path="/movies/popular?page=1" text="人気ランキング" />
          <MoviesTopPopular />
          <PageHeading
            path="/movies/popular?page=1"
            text="興行収入ランキング"
          />
          <MoviesTopRevenue />
        </Grid>
      </Grid>
    </div>
  );
};

export default Index;
