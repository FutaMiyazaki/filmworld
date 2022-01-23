import Head from "next/head";
import { useRouter } from "next/router";
import { PageHeading } from "src/components/Layout/PageHeading";
import { GenreMovies } from "src/components/Movies/GenreMovies";

export default function Posts() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>ジャンルの映画一覧 - FilmWorld</title>
      </Head>
      <PageHeading text="映画一覧" />
      <GenreMovies />
    </div>
  );
}
