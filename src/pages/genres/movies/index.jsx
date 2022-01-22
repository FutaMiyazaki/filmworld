import Head from "next/head";
import { useRouter } from "next/router";
import { PageHeading } from "src/components/Layout/PageHeading";
import { GenreMovies } from "src/components/Movies/GenreMovies";

export default function Posts() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>映画一覧</title>
      </Head>
      <PageHeading text="映画一覧" />
      <GenreMovies />
    </div>
  );
}
