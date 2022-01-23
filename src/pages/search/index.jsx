import Head from "next/head";
import { useRouter } from "next/router";
import { SearchMovies } from "src/components/Movies/SearchMovies";

export default function Search() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.keyword}の検索結果 - FilmWorld</title>
      </Head>
      <SearchMovies />
    </div>
  );
}
