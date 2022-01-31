import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { FavoriteMovies } from "src/components/Movies/FavoriteMovies";

export default function Favorite() {
  return (
    <div>
      <Head>
        <title>観たい映画 - FilmWorld</title>
      </Head>
      <PageHeading text="観たい!映画" />
      <FavoriteMovies />
    </div>
  );
}
