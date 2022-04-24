import { Grid } from "@mui/material";
import { NextPage } from "next";
import { HeadingLink } from "src/components/Layout/Link/HeadingLink";
import { SideMenu } from "src/components/Layout/SideMenu";
import { MoviesTopPopular } from "src/components/Movies/Top/Popular";
import { MoviesTopRevenue } from "src/components/Movies/Top/Revenue";

const Index: NextPage = () => {
  return (
    <Grid container>
      <Grid
        item
        sm={5}
        md={4}
        lg={3}
        sx={{ display: { xs: "none", sm: "flex" } }}
      >
        <SideMenu />
      </Grid>
      <Grid item xs={12} sm={7} md={8} lg={9}>
        <HeadingLink
          path="/movies/popular?page=1"
          text="人気ランキング"
          underline="hover"
        />
        <MoviesTopPopular />
        <HeadingLink
          path="/movies/revenue?page=1"
          text="興行収入ランキング"
          underline="hover"
        />
        <MoviesTopRevenue />
      </Grid>
    </Grid>
  );
};

export default Index;
