import { NextPage } from "next";
import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MoviesFavorite } from "src/components/Movies/Favorite/index";

const Watchlist: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ウォッチリスト - FilmWorld</title>
      </Head>
      <PageHeading text="ウォッチリスト" />
      <MoviesFavorite />
    </div>
  );
};

export default Watchlist;
