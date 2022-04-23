import { NextPage } from "next";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MoviesTopPopular } from "src/components/Movies/Top/Popular";
import { MoviesTopRevenue } from "src/components/Movies/Top/Revenue";

const Index: NextPage = () => {
  return (
    <div>
      <PageHeading path="/movies/popular?page=1" text="人気ランキング" />
      <MoviesTopPopular />
      <PageHeading path="/movies/popular?page=1" text="興行収入ランキング" />
      <MoviesTopRevenue />
    </div>
  );
};

export default Index;
