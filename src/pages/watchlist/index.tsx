import { NextPage } from "next";
import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { MoviesWatchlist } from "src/components/Movies/Watchlist/index";

const Watchlist: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ウォッチリスト - FilmWorld</title>
      </Head>
      <PageHeading text="ウォッチリスト" />
      <MoviesWatchlist />
    </div>
  );
};

export default Watchlist;
