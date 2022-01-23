import Head from "next/head";
import { useRouter } from "next/router";
import { RankingMovies } from "src/components/Movies/RankingMovies";

export default function Search() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>人気の映画 - FilmWorld</title>
      </Head>
      <RankingMovies />
    </div>
  );
}
