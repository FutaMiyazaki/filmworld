import Head from "next/head";
import { PageHeading } from "src/components/Layout/PageHeading";
import { GenreList } from "src/Genre/GenreList";

export default function Search() {
  return (
    <div>
      <Head>
        <title>ジャンル一覧 - 映画辞典</title>
      </Head>
      <PageHeading text="ジャンル一覧" />
      <GenreList />
    </div>
  );
}
