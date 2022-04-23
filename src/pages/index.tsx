import { NextPage } from "next";
import { HeadingLink } from "src/components/Layout/Link/HeadingLink";
import { MoviesTopPopular } from "src/components/Movies/Top/Popular";
import { MoviesTopRevenue } from "src/components/Movies/Top/Revenue";

const Index: NextPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default Index;
