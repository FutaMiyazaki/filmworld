import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { GenreList } from "src/Genre/GenreList";

export default function Genres() {
  return (
    <div>
      <Head>
        <title>ジャンル一覧 - FilmWorld</title>
      </Head>
      <PageHeading text="ジャンル一覧" />
      <GenreList />
    </div>
  );
}
