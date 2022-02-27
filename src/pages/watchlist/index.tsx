import { NextPage } from "next";
import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { FavoriteMovies } from "src/components/Movies/FavoriteMovies";

const Watchlist: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ウォッチリスト - FilmWorld</title>
      </Head>
      <PageHeading text="ウォッチリスト" />
      <FavoriteMovies />
    </div>
  );
};

export default Watchlist;
